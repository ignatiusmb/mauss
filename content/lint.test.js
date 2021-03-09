import { readdirSync } from 'fs';

const sets = { posts: new Set() };
for (const filename of readdirSync('content/posts')) {
	const match = filename.match(/(draft|[-\d]+)\.([-\w]+)\.md/);
	if (!match || (match && match[1] === 'draft')) continue;
	if (sets.posts.has(match[2])) process.exitCode = 1;
	else sets.posts.add(match[2]);
}

console.info('content/posts passed lint!');
