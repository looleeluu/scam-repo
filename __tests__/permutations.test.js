import permutations from "../permutations.js";

test('permutation tests', () => {
	expect(permutations('a')).toEqual(['a']);
	expect(permutations('ab')).toEqual(['ab', 'ba']);
	expect(permutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
	expect(permutations('abcd')).toEqual(['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'].sort());
});