// JavaScript 代码
var searchResultsList = [] // 存储搜索结果列表

function search() {
  var input = document.getElementById('searchInput')
  var filter = input.value.toUpperCase()
  var strongElements = document.querySelectorAll('strong')
  var results = document.getElementById('searchResults')

  results.innerHTML = '' // 清空之前的搜索结果

  var matchingElements = [] // 存储匹配的strong元素的索引和原始元素

  strongElements.forEach((el, index) => {
    if (el.textContent.toUpperCase().indexOf(filter) > -1) {
      matchingElements.push({ index: index, element: el })
    }
  })

  matchingElements.forEach(({ index, element }) => {
    if (element) {
      var resultItem = document.createElement('div')
      resultItem.textContent = element.textContent
      resultItem.className = 'search-result'
      resultItem.onclick = function () {
        // 点击结果时跳转到对应的strong元素位置
        element.scrollIntoView({ behavior: 'smooth' })
      }
      results.appendChild(resultItem)
    }
  })

  if (matchingElements.length === 0) {
    results.innerHTML = '没有找到任何匹配的结果。'
  }
}

document.getElementById('searchInput').addEventListener('input', search)
document
  .getElementById('searchInput')
  .addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && searchResultsList.length > 0) {
      event.preventDefault() // 阻止表单提交
      // 按回车键时跳转到第一个搜索结果的位置
      matchingElements[0].element.scrollIntoView({ behavior: 'smooth' })
    }
  })
