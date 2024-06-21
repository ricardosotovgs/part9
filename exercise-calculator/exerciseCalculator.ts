import { isNotNumber } from "./utils";

export interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

interface Rating {
    rating: number;
    ratingDescription: string;
}

export interface ExerciseValues {
    target: number;
    hoursPerDay: number[];
}

function calculateRating(trainingDays: number): Rating {
    const score = trainingDays % 3;
    switch (score) {
        case 0:
            return { rating: 1, ratingDescription: 'more effort needed'};
        case 1:
            return { rating: 2, ratingDescription: 'almost there!'};
        case 2:
            return { rating: 3, ratingDescription: 'great job!'};
        default:
            throw new Error('could not calculate rating');
    }
}

export function calculateExercises(hoursPerDay: number[], target: number): Result {
    const periodLength = hoursPerDay.length;
    const trainingDays = hoursPerDay.filter(day => day != 0).length;
    const success = trainingDays === target ? true : false;
    const { rating, ratingDescription } = calculateRating(trainingDays);
    const average = hoursPerDay.reduce((previousValue, currentValue) => previousValue + currentValue) / hoursPerDay.length;

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    };
}

const parseExerciseArgs = (args: string[]): ExerciseValues => {
    if (args.length < 4) throw new Error('At least a target and a day are needed');

    if(isNotNumber(args[2])) throw new Error('The target needs to be a number');

    const hoursPerDay = args.slice(3).map((argument) => {
        if (isNotNumber(argument)) throw new Error('Hours per day need to be a number');
        else return Number(argument);
    });

    return {
        target: Number(args[2]),
        hoursPerDay,
    };
};

try {
    const { target, hoursPerDay } = parseExerciseArgs(process.argv);
    console.log(calculateExercises(hoursPerDay, target));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
        errorMessage += error.message;
    }

    console.log(errorMessage);
}