export const shuffleArray = (array: any[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

const arrangeUp = (arr: any[], source: any, target: any) => {
	let tmp;
	let tmp2;
	for (let i = 0; i < arr.length; i++) {
		if (i === target) {
			tmp = arr[i];
			arr[i] = arr[source];
		}
		if (i > target) {
			tmp2 = arr[i];
			arr[i] = tmp;
			tmp = tmp2;
		}
	}
	return arr;
};
const arrangeDown = (arr: any[], source: any, target: any) => {
	let tmp;
	let tmp2;
	for (let i = arr.length - 1; i > 0; i--) {
		if (i === target) {
			tmp = arr[i];
			arr[i] = arr[source];
		}
		if (i < target) {
			tmp2 = arr[i];
			arr[i] = tmp;
			tmp = tmp2;
		}
	}
	return arr;
};
export const reArrange = (arr: any[], source: any, target: any) => {
	if (source > target) {
		arr = arrangeUp(arr, source, target);
	}
	if (source < target) {
		arr = arrangeDown(arr, source, target);
	}
	return arr;
};
