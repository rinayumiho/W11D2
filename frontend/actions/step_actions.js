// error handling is better
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = (steps) => { // steps will be passed in as an array
	return {
		type: RECEIVE_STEPS,
		steps
		//steps: steps
	}
}

export const receiveStep = (step) => {
	return {
		type: RECEIVE_STEP,
		step
		//step: step
	}
}

export const removeStep = (step) => {
	return {
		type: REMOVE_STEP,
		step
		//step: step
	}
}

