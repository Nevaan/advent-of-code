import { fuelCounter } from './task1';
import { day1Input } from './input';

export const fuelCeption = (mass: number): number => {
    const fuelAmount = fuelCounter(mass);
    if(fuelAmount > 0) {
        return fuelAmount + fuelCeption(fuelAmount);
    }
    return 0;
}

export const task2Fn = () => {
    return day1Input.reduce((acc, current) => {
      return acc + fuelCeption(current)
    }, 0);
}
  
require('make-runnable');
