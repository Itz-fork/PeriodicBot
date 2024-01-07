// Copyright (c) 2024 Itz-fork

// deno-lint-ignore-file
import { ONE_ELEMENTS, TWO_ELEMENTS } from "../elements.ts";

function fromOnes(sentence: string) {
	let words = sentence.replace(/[^a-zA-Z]/g, "").match(/.{1}/g) || [];
	let result = "";
	let on_array = 0;

	for (const word of words) {
		on_array++;
		if (word === "") continue;
        

		if (ONE_ELEMENTS.has(word)) {
			result += `${word.toUpperCase()} `;
		} else {
			let with_next = `${word}${words[on_array]}`;

			if (TWO_ELEMENTS.has(with_next)) {
				words.slice(on_array, 1);
				result += `${with_next} `;
			}
		}
	}

    return result
}

let res = fromOnes("Ok.... now this is epic....".toLowerCase());
console.log(res);
