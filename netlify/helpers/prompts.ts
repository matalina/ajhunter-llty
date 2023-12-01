export const prompts = [
  { prompt: "Write a simile", example: "The night sky was as dark as coal, with stars twinkling like diamonds scattered across a velvet blanket." },
  { prompt: "Write a metaphor", example: "The world is a stage, and we are all actors playing our parts." },
  { prompt: "Write a personification of some non-human entity", example: "The autumn leaves danced and whispered in the wind as if sharing secrets with each other." },
  { prompt: "Write a hyperbole", example: "I've told you a million times to clean your room!" },
  { prompt: "Write an alliteration", example: "Sally sells seashells by the seashore." },
  { prompt: "Write an onomatopoeia", example: "The bees buzzed around the flowers in the garden." },
  { prompt: "Write an oxymoron", example: "The silence was deafening." },
  { prompt: "Write an anaphora", example: "In times of hardship, in times of doubt, in times of despair, we must stand together." },
  { prompt: "Write a paradox", example: "This is the beginning of the end." },
  { prompt: "Write an assonance", example: "The rain in Spain falls mainly on the plain." },
  { prompt: "Describe a location using only the scent of smell" },
  { prompt: "Describe a location using only the scent of taste" },
  { prompt: "Describe a location using only the scent of hearing" },
  { prompt: "Describe a location using only the scent of touch" },
  { prompt: "Describe a location using only the scent of sight" },
  { prompt: "Describe a location using all the senses" },
  { prompt: "Describe an object using only the scent of smell" },
  { prompt: "Describe an object using only the scent of taste" },
  { prompt: "Describe an object using only the scent of hearing" },
  { prompt: "Describe an object using only the scent of touch" },
  { prompt: "Describe an object using only the scent of sight" },
  { prompt: "Describe an object using all the senses" },
  { prompt: "Describe an emotion without using the emotion" },
  { prompt: "Create dialog between two people" },
  { prompt: "Use body language to convey more than the words say" },
  { prompt: "Write in first person" },
  { prompt: "Write in second person" },
  { prompt: "Write in third person" },
  { prompt: "Write in deep third person" },
  { prompt: "Write in third person omniscient" },
];

const jan = [22, 2, 14, 27, 30, 31, 17, 16, 20, 7, 23, 19, 5, 28, 10, 11, 12, 3, 18, 4, 24, 26, 21, 9, 13, 25, 15, 1, 6, 8, 29];
const feb = [10, 3, 24, 5, 17, 25, 7, 9, 29, 28, 27, 16, 13, 21, 12, 30, 26, 14, 15, 2, 18, 19, 1, 4, 31, 11, 8, 22, 20]; // 29
const mar = [27, 6, 9, 23, 2, 22, 29, 11, 13, 30, 21, 28, 15, 14, 7, 19, 3, 25, 20, 12, 31, 8, 5, 4, 24, 16, 10, 18, 26, 17, 1];
const apr = [28, 11, 20, 13, 23, 8, 3, 17, 14, 22, 16, 15, 31, 6, 18, 19, 21, 2, 12, 9, 1, 25, 29, 10, 24, 27, 30, 4, 5, 26]; // 30
const may = [4, 26, 12, 24, 13, 27, 5, 23, 16, 9, 31, 1, 30, 8, 11, 28, 10, 22, 25, 3, 29, 17, 20, 7, 2, 19, 15, 21, 14, 18, 6];
const jun = [13, 24, 17, 28, 29, 7, 1, 23, 8, 2, 10, 26, 16, 25, 30, 4, 18, 31, 22, 20, 5, 9, 15, 21, 14, 11, 19, 6, 27, 3]; // 30
const jul = [20, 15, 7, 12, 27, 31, 23, 26, 5, 8, 3, 19, 9, 2, 21, 28, 10, 25, 6, 11, 30, 13, 4, 24, 29, 22, 18, 1, 16, 14, 17];
const aug = [2, 5, 9, 20, 4, 10, 18, 29, 17, 11, 23, 13, 7, 1, 30, 15, 28, 24, 22, 16, 27, 25, 12, 31, 26, 8, 14, 3, 19, 6, 21];
const sep = [6, 7, 16, 15, 31, 3, 23, 5, 27, 29, 1, 18, 30, 28, 12, 9, 8, 20, 24, 11, 4, 25, 17, 10, 14, 21, 26, 19, 22, 13]; // 30
const oct = [8, 27, 26, 30, 22, 19, 12, 21, 25, 1, 16, 2, 18, 7, 4, 20, 3, 6, 9, 23, 13, 24, 11, 5, 15, 17, 10, 28, 29, 14, 31];
const nov = [17, 18, 2, 4, 12, 27, 23, 28, 25, 6, 20, 10, 21, 15, 16, 19, 5, 8, 22, 30, 24, 9, 3, 14, 26, 31, 11, 7, 1, 29]; // 30
const dec = [23, 2, 3, 4, 19, 16, 10, 8, 9, 22, 30, 25, 24, 15, 14, 11, 28, 20, 6, 13, 18, 27, 17, 21, 12, 31, 29, 1, 5, 26, 7];

export const randomPromptByMonth = {jan, feb, mar, apr, may, jun, jul, aug, sep, oct,  nov, dec};
