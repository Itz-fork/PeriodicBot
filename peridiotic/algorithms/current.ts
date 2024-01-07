// Copyright (c) 2024 Itz-fork

// deno-lint-ignore-file
import { ONE_ELEMENTS, TWO_ELEMENTS } from "../elements.ts";

function fromTwos(sentence: string) {
	let words = sentence.replace(/[^a-zA-Z]/g, "").match(/.{1,2}/g) || [];
    let result = ""
    let on_array = 0

    for (const word of words) {
        on_array++

        if (TWO_ELEMENTS.has(word)) {
            result += `${word[0].toUpperCase()}${word.slice(1)} `
            
        }
        else {
            

            if (ONE_ELEMENTS.has(word[0])) {
                result += `${word[0].toUpperCase()} `
            }
            // kept as placeholder for future upgrade of the algorithm (if I ever have time to do it)
            // else {
            //     let before = words[on_array-2]
            //     let with_back = `${before[1] ? before[1] : before[0]}${word[0]}`

            //     if (TWO_ELEMENTS.has(with_back)) {
                    
            //     }
            // }

            if (word[1]) {
                
                let combined = on_array < words.length ? `${word[1]}${words[on_array][0]}` : ""
                

                if (TWO_ELEMENTS.has(combined)) {
                    result += `${combined[0].toUpperCase()}${combined.slice(1)} `
                    words.slice(on_array, 1)
                }
                else if (ONE_ELEMENTS.has(word[1])) {
                    result += `${word[1].toUpperCase()} `
                }
                else return ""
            }
        }
        
        console.log(result);
    }
    return result
}

export { fromTwos }
// let res = fromTwos("Ok.... now this is epic....".toLowerCase());
// console.log(res);