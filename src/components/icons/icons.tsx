import React, { FC, useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCoffee,
	faClock,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
export const IconCoffe = () => <FontAwesomeIcon icon={faCoffee} />;
export const IconClock = () => <FontAwesomeIcon icon={faClock} />;
export const ArrowRight = () => <FontAwesomeIcon icon={faLongArrowAltRight} />;
