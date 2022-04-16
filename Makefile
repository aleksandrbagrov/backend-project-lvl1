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
	