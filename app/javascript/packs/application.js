import "bootstrap";

import formCheck from "./form_check"
import collapser from "../components/collapser"

import scrollLastMessageIntoView from "./scroll_last_message"

import popOver from "./pop_over"

import '../plugins/flatpickr'
import '../plugins/tokenizer'

import scrollButton from "./scroll_button"

import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();

formCheck();
scrollLastMessageIntoView();
popOver();
collapser();
scrollButton();

// scrollButtonMap();
// scrollButtonFunciona();
// scrollButtonAboutUS();


