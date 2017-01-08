import * as Vue from 'vue'
import App from '../src/App'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    expect(new Vue(App)).toBeTruthy();
  })
})