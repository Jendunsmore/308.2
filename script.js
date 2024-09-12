/* Step 1: Growing Pains

/* The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.*/

/* Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80%
of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of
the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given
number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.*/

/* Provided info:
- circular area w/ plants, radius of 5
- cal. area of circle= PI * radius * radius
- plants double in size weekly
- pruned: ___ weeks & plant count < 80%
- monitored: ___ weeks & plant count between 50% - 80% of max. cap
- planted: ___ weeks & plant count > 50%
- growth inputs for weeks: 1, 2, 3
* monitor growth of plants / decide on prune, monitor, or plant*

const PI = 3.1415;
const radius = 5
*/

const PI = 3.1415;
const radius = 5;
const plantSpace = 0.8;

const gardenArea = PI * radius * radius
/* console.log(gardenArea);
78.53750000000001 */

/* number of max plants garden can hold */
const maxPlants = gardenArea / plantSpace;
/* console.log(maxPlants);
98.171875 */



/* Part 2: Thinking Bigger */
