# html 구조

---

## html 주석

```shell
  <!-- 찾을 수 있을 때 편함 --> 
```

## css 전용 주석

```shell
/* */
```

## meta 구조

```shell
<meta http-equiv="X-UA-compatable" content="IE=edge">
= 표준에 부합되지 않는 브라우저 ,     익스플로어 버젼을 마지막 버젼으로 써라
```


## entity code

```entity code
&lt; , &gt; = <, > 
&8361; = 원화
&amp; = &
```

## 제목/내용 구분, 줄 바꿈 선

```shell
<hr />, <br />
```

## 인용문

```shell
<blockquote> 
        <q> 신은 죽었다. </q>         // q = " 
        <q> 악법도 법이다. </q>
</blockquote>
```

## 약어 표현법 (abbr)

```shell
<p> <abbr title="hiper text markup language"> HTML </abbr> 
    의 기능은 구조를 나타내는 것이고, <br/>
    <abbr title="cascading style sheets"> CSS </abbr>
    의 기능은 디자인을 처리하며, <br />
    <abbr title="javascript"> JS </abbr>
    의 기능은 제어를 하는 것이다. </p>
```

## 강조

```shell
    <strong> 강조 </strong> = 매우 중요하며, 위험한 의미
    <em> 기울이기 </em>      = 권장정도의 중요함
    <del> 취소선 </del>      = 의미없음
    <ins> 밑줄 </ins>        = 인식의 방향을 잡아줌
```

## 목록

```list
      # ul(기호), ol(숫자), dl(리스트)
      # ul, ol의 자식 li
      <ul>
        <!--unorder list (기호) -->
        <li> 목록1 </li>
        <li> 목록2 </li>
      </ul>
      <ol>
        <!-- order list (숫자) -->
        <li> 목록1 </li>
        <li> 목록2 </li>
      </ol>
      <dl>
        <!-- data list -->
        <dt> 리스트의 제목 </dt>              // 요약적인 제목
        <dd> 리스트의 내용을 담아서 처리 </dd> //
        <dd> 리스트의 내용을 담아서 처리 </dd> //
      </dl>
      
      # 중첩*(다단)리스트
      <ul>
        <li> 목록 </li>
        <li> 목록1
          <ul>
            <li> 목록1-1 </li>
            <li> 목록1-2 </li>
          </ul>
        </li>
        <li> 목록2
          <ul>
            <li> 목록2-1 </li>
            <li> 목록2-2 
            <dl>
              <dt> 목록2에 대한 중간 제목 </dt>
              <dd> 목록2-2-2에 대한 설명 </dd>
            </dl>
            </li>
          </ul>
        </li>
      </ul>
```

## 이미지, 경로

```img
     # 이미지
     <img src="./pengsu.jpg" alt="이미지에 대한 정확하고 의미있는 설명" />
     
     # 경로
      <a href="https://naver.com" target="_blank"> 네이버로 이동하기 </a>
```

## 그룹

```group
박스
<div> </div>

일부 내용
<span> </span>
```

