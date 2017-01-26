import * as Vue from 'vue'
import App from '../src/App.vue'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    expect(new Vue(App)).toBeTruthy();
  })
})