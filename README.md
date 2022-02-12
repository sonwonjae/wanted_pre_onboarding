# wanted_pre_onboarding

> 원티드 프리 온보딩 과정 선발 과제

<br>

## How To Check

1. `git clone https://github.com/sonwonjae/wanted_pre_onboarding.git`

2. `cd custom-component`

3. `npm i`

4. `npm start`

<br>

---

## 폴더 구조

```shell
src
├─components
│  ├─AutoComplete
│  ├─ClickToEdit
│  ├─Modal
│  ├─Tab
│  ├─Tag
│  ├─Toggle
│  └─Util
├─hooks
│  ├─AutoComplete
│  ├─ClickToEdit
│  ├─Modal
│  ├─Tag
│  └─Toggle
├─pages
│  └─App
├─styles
│  ├─color
│  └─utils
└─utils
    ├─makeString
    └─Routes
```

### `components`

각 컴포넌트 명으로 폴더를 구성하고 그 하위에는 아래와 같이 구성되어 있습니다.

```shell
│  │  ├─Compound
│  │  ├─controller
│  │  ├─setting
│  │  ├─style
│  │  └─view
│  │  Component.js
```

#### `Compound`

컴포넌트에 컴파운드 컴포넌트가 필요한 경우 `Compound`폴더에 구성

#### `controller`

컴포넌트에서 사용되는 컨트롤러, 즉 이벤트 핸들러를 관리하는 폴더

#### `view`

컴포넌트 내부에서 주로 리스트렌더링에 사용되는 로직을 관리하는 폴더

#### `style`

`styled-component`를 관리하는 폴더

#### `setting`

만약 컴포넌트에서 복잡한 초기설정 (`useReducer`의 `reducer`와 `initialState`같은)이 필요한 경우 따로 관리하기 위해 생성한 폴더

#### `Component.js`

컴포넌트 로직

<br>

### `hooks`

> `React`를 사용하는 관점에서 컴포넌트를 관리할 때 컴포넌트는 표현에 집중하고 상태는 `Hook`을 통해 관리하며 컴포넌트의 상태와 표현을 분리하고 싶었습니다.

때문에 컴포넌트에서 상태 관리가 필요한 경우 `Custom Hook`을 작성하여 컴포넌트 외부에서 관리하도록 하였습니다.

<br>

### `pages`

실제 하나의 페이지로 구분될 수 있는 단위의 컴포넌트 구성입니다.

<br>

### `styles`

`styled-component` or `styled`관련 로직의 집합으로서 `color`의 관리를 `util`형태로 사용하고 `styled-component`에서 `prop`으로 관리하는 속성들을 `util`형태로 분리하기 위해 생성한 폴더입니다.

```js
// HexaColor.js
export const HexaColor = {
  primary: {
    500: '#4900CE',
  },
  black: {
    ...
  },
  gray: {
    ...
  },
};

// getHexaColor.js
export const getHexaColor = (colorName, step = 500) =>
  HexaColor[colorName][step];

```

<br>

### `utils`

순수함수로 구성되어 `util`의 역할을 하는 함수의 집합 폴더 입니다.

<br>

---

## AutoComplete

### 기능 소개

#### 자동 완성

![autocomplete](https://user-images.githubusercontent.com/87295692/153609593-020b0ee9-8147-4e60-90e5-e033ffee0705.gif)

#### 자동 완성 로직

> `Trie` 알고리즘을 사용하여 시간복잡도에 신경쓰며 자동 완성 기능을 구현하였습니다.

- `class Word`: 문자열의 한 단어(노드)

  `child`: 현재 노드 위치의 자식, 즉 다음 단어 한 글자가 담기는 `Map`

  - 순서를 보장받고 중복을 방지하기 위해 `Map`을 사용했습니다.

  `word`: 전달받게 되는 문자열 끝지점의 `word`에 문자열 바인딩

<br>

- `insert`

  문자열을 전달받아 `AutoCompleteList`에 단어 하나씩 링크드 리스트 형태로 `insert`하는 메서드

<br>

- `getWordsFromCurrentWord`

  현재 `Word(노드)`위치를 전달받아 그 지점부터 `AutoCompleteList`를 탐색하며 `word` 프로퍼티를 모두 배열에 담아 반환하는 메서드

<br>

- `getAllWords`

  `AutoCompleteList`의 모든 단어(`word`)를 배열에 담아 반환하는 메서드

<br>

- `getSameWords`

  `targetWord`를 전달받아 단어 검색 조건에 부합한 `word`를 배열에 담아 반환하는 함수

  `targetWord`는 `trim`하고 `toLowerCase`로 변환하여 사용

  - 조건

    `root` `Word(노드)`부터 탐색하며 `targetWord`의 첫번째 문자와 키 값이 일치하는지 확인

    일치한다면 다음 `Word`의 키 값과 `targetWord`의 다음 문자열을 비교하며 `targetWord`와 일치하는 `Word`지점 탐색

    `Word`지점에 제대로 도달했다면 그 지점에서 `getWordsFromCurrentWord`메서드 실행

    담겨진 모든 문자열을 반환

  - 결론

    이렇게 탐색하면 `targetWord`와 가장 먼저 일치하는 `word`부터 차례로 반환됨

<br>

#### 키보드 컨트롤

`ArrowKey`

![autocomplete_arrowKey](https://user-images.githubusercontent.com/87295692/153609919-86a33555-4262-4250-a833-5b0d5b96f127.gif)

<br>

`TabKey`

![autocomplete_tab](https://user-images.githubusercontent.com/87295692/153610769-629786ad-562f-4111-8f2c-9f9a48c46814.gif)

> 마우스뿐만 아니라 키보드를 사용하여 접근하는 사람도 많기 때문에 키보드 컨트롤에도 신경을 썼습니다.
>
> `matchWords`: 자동완성 탐색 결과 리스트입니다.

- `Input`

  - `Tab`: `matchWords`의 첫번째 아이템으로 포커싱하며, 마지막 아이템에서는 `x`버튼으로 탈출
  - `ArrowDown`: `matchWords`의 첫번째아이템으로 포커싱하지만 `matchWords` 탈출 불가(`trapping`)
  - `ArrowUp`: `matchWords`의 마지막아이템으로 포커싱하지만 `matchWords` 탈출 불가(`trapping`)
  - `Escape`: `matchWords`를 닫음(화면에 렌더링하지 않음)

<br>

- `matchWords`

  - `Tab`: 다음 아이템으로 이동가능하며, 마지막 아이템에서는 `x`버튼으로 탈출
  - `ArrowDown`: 다음 아이템으로 이동가능하며 `trapping`
  - `Shift + Tab`: 이전 아이템으로 이동가능하며, 첫번째 아이템에서는 `input`으로 회귀
  - `ArrowUp`: 이전 아이템으로 이동가능하며 `trapping`
  - `Escape`: `matchWords`를 닫음(화면에 렌더링하지 않음)

<br>

### 구현하면서 어려웠던 점 및 해결 방법

> 문제상황: `Input`에서 `onBlur` 되었을 때 `matchWords`를 클릭하면 `matchWord`가 `Input`에 입력되어야 하고 이 외의 위치로 `blur`된다면 `matchWords`를 닫아야하는데 애초에 `blur`이벤트는 어디로 나가는지의 정보는 제공하지 않기 때문에 `matchWords`를 클릭할 수 없었습니다.

#### 문제점

`matchWords`의 `onClick` 이벤트보다 `Input`의 `onBlur`이벤트가 먼저 발생하여 `Input`에서 `blur`되면 `matchWords`가 먼저 닫혀버리기 때문에 `onClick`이벤트를 감지할 수 없음

#### 해결법

시야를 `AutoComplete`로 가두지 않고 `body`의 `onClick`이벤트와 `closest`메서드를 사용하여 클릭했을 때 가장 가까운 상위에 `ref`로 잡아둔 `AutoCompleteContainer`가 없을 때만 `matchWords`를 닫도록 구현

- 메모리 절약을 위해 `useEffect`에서 구독해지까지 설정

  ```js
  useEffect(() => {
    document.body.addEventListener('click', onBlurToAutoComplete);
    return function cleanup() {
      document.body.removeEventListener('click', onBlurToAutoComplete);
    };
  }, [onBlurToAutoComplete]);
  ```

<br>

---

## Tab

### 기능 소개

#### `react-router`를 사용하여 `Tab` 내부의 `<Outlet>` 렌더링

> 6가지 과제를 조합하여 `App`에 한번에 보여줄 방법을 찾다가 `Tab`과 `react-router`를 사용하여 `path`에 맞는 컴포넌트를 보여주고자 하였습니다.
>
> `Tab`은 단순히 `tabList`를 전달받아 `Tab`을 구현하고 `Main`으로 감싼 `Outlet`을 반환할 뿐입니다.

![Tab](https://user-images.githubusercontent.com/87295692/153619952-00bd63eb-a4d0-49de-9896-f511111a2b7f.gif)

<br>

#### `React.lazy`, `React.Suspense`를 사용하여 `code splitting` 및 `Component lazy loading` 구현

![Tab_lazyLoading](https://user-images.githubusercontent.com/87295692/153619880-e759026b-ed35-4b58-9529-57e0ce0688ae.gif)

<br>

### 구현하면서 고민했던 점 및 해결 방법

> 정확히는 `Tab`기능을 위한 고민이라기 보다 `lazy Loading`을 위한 고민이었습니다.
>
> 문제상황
>
> - `lazy Component`들을 하나의 객체로 관리할 수 없을까?

#### 해결법

결론적으로 두개의 객체를 사용했습니다.

`lazyComponents`라는 객체를 이용하여 `makeRouteComponents` 메서드로 `Suspense`로 감싸진 `Component`를 `element`로 사용하는 `Route`리스트를 반환하였고

`props`라는 객체는 `props`를 넣고 싶은 컴포넌트의 이름을 키 값으로 `props`를 설정할 수 있도록 하였습니다.

`src/pages/App/App.jsx`

```js
const lazyComponents = {
  Index: lazy(() => import('components/Util/Route/Index')),
  Toggle: lazy(() => import('components/Toggle/Toggle')),
  Modal: lazy(() => import('components/Modal/Modal')),
  Tag: lazy(() => import('components/Tag/Tag')),
  AutoComplete: lazy(() => import('components/AutoComplete/AutoComplete')),
  ClickToEdit: lazy(() => import('components/ClickToEdit/ClickToEdit')),
  PageNotFound: lazy(() => import('components/Util/Route/PageNotFound')),
};

const props = {
  Modal: { children: 'HEllO CODESTATES!' },
};
```

<br>

---

## Modal

### 기능 소개

#### 모달 버튼 클릭 시 모달 오픈 및 닫기

`overlay click` & `Escape keyPress` & `space & Enter` & `Escape button click`

![modal](https://user-images.githubusercontent.com/87295692/153616596-a8edc8a7-e0c1-4e9a-a542-a3734c78f688.gif)

<br>

### 구현하면서 고민했던 점 및 해결 방법

> 1. 키보드 접근성
> 2. 모달창에 `createPortal` 사용하기

#### 해결법

1. 키보드 접근성

- 모달 버튼을 클릭 시 모달 창에 `focus`되도록 구현
- 모달에 `ref`를 사용하여 모달 안의 `focusable elements`를 모두 알아내어 배열에 담고 키보드 트래핑도 구현
  - 모달 창이 열리면 키보드로는 밖으로 나갈 수 없음

<br>

2. 모달창에 `createPortal`사용하기

- 모달은 컴포넌트로서 어느 `Depth`까지 들어갈지 알 수 없기 때문에 모달창은 항상 `body`에 직계 소속되어 있어야 함

  - 때문에 `createPortal`을 사용하여 `body`에 구현

- 모달 내부의 모달창(`Dialog`)은 모달에서 사용되긴 하지만 분리된 컴포넌트로 봐도 무방하기 때문에 컴파운드 컴포넌트로 제작

<br>

---

## ClickToEdit

### 기능 소개

#### 더블 클릭 시 `input` 활성화 및 `submit`될 경우 `div` 활성화

> - `submit`되는 조건
>
>   - `input`창에서 `blur`되었을 때
>   - `form`에서 `submit` 되었을 때

`Double Click on Input` & `submit`

![clickToEdit_submit](https://user-images.githubusercontent.com/87295692/153612466-af42ca7e-4834-475c-8f97-d649c45d2b85.gif)

<br>

`Double Click on Input` & `onBlur`

![clickToEdit_onBlur](https://user-images.githubusercontent.com/87295692/153612758-e986fd52-65b3-4adc-810d-5a5923d5fbfd.gif)

<br>

### 구현하면서 고민했던 점 및 해결 방법

> 고민 상황: 컴포넌트의 확장성을 고려했을 때 하나의 객체로 모든 `input`들을 관리하고 싶었습니다.

#### 해결법

> `formInput`: `{ label: '', value: '' }` 형태의 객체로 이루어진 객체
>
> `formInputList`: `formInput`의 배열 집합체
>
> `formInputList` `prop`으로 `ClickToEdit`의 렌더링 여부를 결정하도록 구현

<br>

---

## Tag

### 기능 소개

#### `input`에서 `Enter keyUp`을 캐치하여 태그 추가 및 `Escape button`으로 태그 제거

![tag](https://user-images.githubusercontent.com/87295692/153623934-c0624578-e63a-4a6d-961a-ff1b65143e6a.gif)

<br>

### 구현하면서 고민했던 점 및 해결 방법

> 1. `border gradient`
> 2. `TagContainer`에서 `input`의 `focus`여부 알아내기

#### 해결법

1. `border gradient`

`border-image`를 사용하여 `gradient`를 구현할 수는 있지만 `border-radius`와 연동되지 않는 점 때문에 가상요소 선택자 `after`를 사용하여 `TagContainer`보다 상하좌우로 `1px` 큰 `block`을 생성하고 `background`에 `gradient`와 `border-radius`를 적용하여 문제 해결

```css
&:after {
  content: '';
  z-index: -1;
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background: linear-gradient(to right bottom, #000, #4900ce);
  border-radius: 0.4rem;
}
```

<br>

1.  `TagContainer`에서 `input`의 `focus`여부 알아내기

`focus-within` 선택자 사용

```css
&:focus-within {
  ...;
}
```

<br>

---

## Toggle

### 기능 소개

![toggle](https://user-images.githubusercontent.com/87295692/153622891-19163e3b-1099-4ac1-8a9c-7379133cb847.gif)

<br>

### 구현하면서 고민했던 점 및 해결 방법

> - 애니메이션에 리플로우를 최적화 하자

#### 해결법

- `toggle`되는 내부 버튼과 배경은 가상요소 선택자 `before`, `after`를 이용하여 구현하였고 움직이는 모션은 `transform`의 `translateX`를 사용하였습니다.

  - 리플로우를 막기위해 GPU로 계산하는 `transform` 속성을 사용했습니다.
