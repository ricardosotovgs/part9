import { isNotNumber } from './utils';

interface BmiValues {
    height: number;
    weight: number;
}

const parseBMIArgs = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if(isNotNumber(args[2]) || isNotNumber(args[3])) throw new Error('Provided values were not numbers');
    else {
        return {
            height: Number(args[2]),
            weight: Number(args[3]),
        };
    }
};

export function calculateBmi(height: number, weight: number): string {
    const heightMeters : number = height / 100;
    const bmi : number = weight / (Math.pow(heightMeters, 2));

    switch (true) {
        case bmi < 25: {
            return 'Normal (healthy weight)';
            break;
        }
        case bmi > 25 && bmi < 30: {
            return 'Overweight';
            break;
        }
        case bmi >= 30: {
            return 'Obese';
            break;
        }
        default:
            throw new Error('Could not calculate BMI.');
            break;
    }
}

try {
    const { height, weight } = parseBMIArgs(process.argv);
    console.log(calculateBmi(height, weight));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
        errorMessage += error.message;
    }

    console.log(errorMessage);
}