"use server";
export const getEnv = async () => ({
  DOCKER_MY_ENV: process.env.DOCKER_MY_ENV,
  DOCKER_ANOTHER_ENV: process.env.DOCKER_ANOTHER_ENV,
  DOCKER_MY_INT: process.env.DOCKER_MY_INT,
  DOCKER_MY_URL: process.env.DOCKER_MY_URL,
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
});