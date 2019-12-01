import { day1Input } from './input';

export const fuelCounter
  = (mass: number) =>   Math.floor(mass / 3) - 2;

export const task1Fn = () => {
  return day1Input.reduce((acc, current) => {
    return acc + fuelCounter(current)
  }, 0);
}

require('make-runnable');