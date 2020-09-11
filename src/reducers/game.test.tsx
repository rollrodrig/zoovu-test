import React from 'react';
import { verifyMatch } from './game';
describe('reducer: game', () => {
	it('should verify match and return true', () => {
		const fakeResult = {
			draggableId: 'draggable_1',
			destination: {
				droppableId: 'droppable_1',
			},
		};
		verifyMatch(fakeResult);
		expect(verifyMatch(fakeResult)).toBeTruthy();
	});
	it('should not verify match and return false', () => {
		const fakeResult = {
			draggableId: 'draggable_1',
			destination: {
				droppableId: 'droppable_2',
			},
		};
		verifyMatch(fakeResult);
		expect(verifyMatch(fakeResult)).toBeFalsy();
	});
});
