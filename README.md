# Movie App

Learn about React JS making movie app.


1. react
react은 어플리케이션을 <div id="root"></div> 안에 넣는다.
실제 소스코드를 보면 index.html이 비어있음을 볼 수 있음.
이것이 리액트를 빠르게 만들어준다. -> virtual DOM.

2. Component
리액트는 컴포넌트 기반으로 동작함.
컴포넌트는 HTML을 리턴하는 함수.
(<App/> 형태로 사용함.) 이러한 형태를 jsx라고 한다.

3. How to add component.
컴포넌트는 한번에 하나의 컴포넌트만 추가하는 것이 좋음.
컴포넌트를 생성하면 App.js에 추가하여 App 컴포넌트 하나만 추가되도록 한다.

4. Component property.
컴포넌트에 프로퍼티를 설정하면 프로퍼티가 함수에 인자로 전달된다.
```      
<Food fav="kimchi" />

function Food({ fav }) {
  console.log(fav);
  return <h1>I love {fav}</h1>
}
```
이런식으로 사용 가능

5. javascript map
map은 배열의 각 아이템에 대해 실행되는 함수의 리턴값들에 대한 배열을 리턴한다. and when return html in map method we need to add a unique key property.

6. HTML in JS
{} 안에 들어가면 자바스크립트 코드다.

7. Render jsx dynamically with map()

8. Warning: Each child in a list should have a unique "key" prop.

9. prop-types

10. state
datas that change.
but don't change data directly, because react doesn't call render() method again. use setState() then react call render() again. and use current parameter so that you can divided from outside state.

11. class component
render() method is automatically executed.

12. narrow function vs normal function.

13. component life cycle of react.(https://reactjs.org/docs/react-component.html)
which functions excuted for each event(update, mount, etc...). and they have an order.

14. data fetch(axios)
axios.get() maybe takes some time so we need to wait it, using 'await' and 'async'.

15. cut text in js.
using slice().

16. deploy to github pages.
add "deploy" and "predeploy" to package.json.
also add "hompage" link to package.json.

17. HashRouter in react-router-dom.
react get component as url. so if you link '/home' then react will render every components that starts with '/home'. same with '/'. so we need give prop 'exact={true}'.

18. <Link to>, not <a href>.
when you are using a navigation with Link, it should be inside Router.

19. history.push()