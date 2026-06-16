import * as core from "@actions/core";

export async function run(): Promise<void> {
  try {
    const name = core.getInput("name");

    core.info(`Hello ${name}!`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
core.info("That's work okay.....")