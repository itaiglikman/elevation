import Tweeter from './Models/tweeter.js';
import render from './render.js';

const tweeter = new Tweeter()
const posts = tweeter.getPosts();
render.renderUI(posts);

