# Makefile

publish: # npm publish

	npm publish --dry-run


install: # install dependencies

	npm ci


lint: # launch eslint

	npx eslint .


brain-games: # start program Brain Games

	node bin/brain-games.js


brain-even: # start game Brain Even

	node bin/brain-even.js

brain-calc: # start game Brain Calc

	node bin/brain-calc.js


brain-gcd: # start games Brain GCD (Greatest Common Divisor)

	node bin/brain-gcd.js


brain-progression: # start games Brain Progression

	node bin/brain-progression.js


brain-prime: # start games Brain Prime

	node bin/brain-prime.js
		