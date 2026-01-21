import $ from 'jquery'

import webmunkSpiderManager, { WebmunkContentSpider } from '@bric/webmunk-spider/spider'

export class WebmunkChatGPTContentSpider extends WebmunkContentSpider {
  toString():string {
    return 'WebmunkChatGPTContentSpider'
  }

  urlMatches(url:string): boolean {
    if (window.location.href.toLowerCase() === 'https://chatgpt.com/') {
      return true // Login check page
    }

    if (window.location.href.toLowerCase() === 'https://chatgpt.com/') {
      return true // Library page
    }

    if (window.location.href.toLowerCase().startsWith('https://chatgpt.com')) {
      return true // Conversation page
    }

    return false
  }

  fetchResults() {
    const response = {
      spiderName: 'ChatGPT',
      results: [],
      urls: [],
      loggedIn: false
    }

    if (window.location.href.toLowerCase() === 'https://chatgpt.com/') {
      // Library page
    } else if (window.location.href.toLowerCase().startsWith('https://chatgpt.com/')) {
      // Conversation page
    } else if (window.location.href.toLowerCase() === 'https://chatgpt.com/') {
      if ($('div.group/sidebar button div:trimmedTextEquals("Account")').length > 0) {
        response.loggedIn = true
      }
    }
  }
}

const spider = new WebmunkChatGPTContentSpider()
webmunkSpiderManager.registerSpider(spider)

export default spider
