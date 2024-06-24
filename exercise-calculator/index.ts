  import express from "express";
  import { calculateBmi } from "./bmiCalculator";
  import { isNotNumber } from "./utils";
  import { calculateExercises } from "./exerciseCalculator";
  const app = express();

  app.use(express.json());

  app.get('/hello', (_request, response) => {
    return response.send('Hello Full Stack!');
  });

  app.get('/bmi', (request, response) => {
    if(isNotNumber(request.query.height) || isNotNumber(request.query.weight)) {
        return response.status(400).json({ error: "malformatted params." }).end();
    } else {
        const height = Number(request.query.height);
        const weight = Number(request.query.weight);
        const bmi = calculateBmi(height, weight);
        return response.status(200).json({
            weight,
            height,
            bmi
        });
    }
  });

  app.post('/exercises', (request, response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const target = request.body?.target;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const hoursPerDay = request.body?.daily_exercises;

    if(target === undefined || hoursPerDay === undefined) return response.status(400).json({ error: 'params missing' }); 
    if(isNotNumber(target)) return response.status(400).json({ error: 'malformatted params' });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = calculateExercises(hoursPerDay, Number(target));
    return response.send(result);
  });

  const PORT = 3003;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });