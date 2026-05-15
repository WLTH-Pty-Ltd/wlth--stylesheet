<template>
  <div class="display-container">
    <h1 class="heading-lg">WLTH CSS Reference</h1>
    <h2 class="heading-md">A companion to the standalone WLTH CSS file</h2>
    <div class="">
      <p class="body">Here is a static link to the CSS file of this project</p>
      <a href="/css/export.css" class="link" target="_blank">View CSS File</a>
    </div>
    <feature 
    title="Large Page Headers"
    :classes="['.text-3xl', '.heading-lg']">
      <template #example>
        <h2 class="heading-lg">
          Australasia’s Newest Lending and Payments Fintech
        </h2>
      </template>
      <template #code>
        <span>
          {{ `
<h2 class="heading-lg">
  Australasia’s Newest Lending and Payments Fintech
</h2>
          ` }}
        </span>
      </template>
      <template #declaration>
{{ `
.text-3xl, .heading-lg {
    font-family: var(--font-sans);
    letter-spacing: -.01em;
    line-height: 1em;
    font-weight: 400;
    font-size: 50px;
  }

@media screen and (min-width: 500px) {
  .text-3xl, .heading-lg {
    font-size: calc(31.06061px + 3.78788vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Standard Page and Module Headers"
    :classes="['.text-2xl', '.heading-md']">
      <template #example>
        <h2 class="heading-md text-secondary">
          Residential Loans
        </h2>
        <h2 class="heading-md">
          Am I eligible for a WLTH Residential Loan?
        </h2>
      </template>
      <template #code>
        <span>{{ `<h2 class="heading-md text-secondary">
          Residential Loans
        </h2>` }}</span>
        <span>{{ `<h2 class="heading-md">
          Am I eligible for a WLTH Residential Loan?
        </h2>` }}</span>
      </template>
      <template #declaration>
        {{ `
.text-2xl, .heading, .heading-md {
    font-family: var(--font-sans);
    letter-spacing: -.01em;
    line-height: 1.167em;
    font-weight: 400;
    font-size: 34px;
}

@media screen and (min-width: 500px) {
  .text-2xl, .heading .heading-md {
    font-size: calc(24.15152px + 1.9697vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Small Headers"
    :classes="['.text-xl', '.heading-sm']">
      <template #example>
        <h3 class="heading-sm">
          Simple online 5-step process.
        </h3>
        <h3 class="heading-sm">
          Brodie Haupt <br />
          <span class="text-secondary">Co-Founder</span>
        </h3>
      </template>
      <template #code>
        <span>
          {{ 
            `<h3 class="heading-sm">
          Simple online 5-step process.
        </h3>` }}
        </span>
        <span>
          {{ `<h3 class="heading-sm">
          Brodie Haupt <br />
          <span class="text-secondary">Co-Founder</span>
        </h3>` }}
        </span>
      </template>
      <template #declaration>
        {{ `
.text-xl, .heading-sm {
    font-family: var(--font-sans);
    letter-spacing: -.01em;
    line-height: 1.167em;
    font-weight: 400;
    font-size: 20px;
}

@media screen and (min-width: 500px) {
  .text-xl, .heading-sm {
    font-size: calc(14.69697px + 1.06061vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Short Descriptions + Large Body Text"
    :classes="['.text-lg', '.body-lg', '.text-body-lg']">
      <template #example>
        <p class="text-lg text-secondary">
          Apply online in 5 simple and easy steps via our state-of-the art Lending Loop Platform. All it takes is 15 minutes.
        </p>
        <br />
        <br />
        <p class="text-lg">
          The National Consumer Credit Protection Act 2009, or the NCCP Act, is legislation that’s designed to protect consumers and ensure ethical and professional standards in the finance industry.
        </p>
      </template>
      <template #code>
        <span>
          {{ `
<p class="text-lg text-secondary">
  Apply online in 5 simple and easy steps via our state-of-the art Lending Loop Platform. All it takes is 15 minutes.
</p>

<p class="text-lg">
  The National Consumer Credit Protection Act 2009, or the NCCP Act, is legislation that’s designed to protect consumers and ensure ethical and professional standards in the finance industry.
</p>` }}
        </span>
      </template>
      <template #declaration>
        {{ `
.text-lg, .body-lg, .text-body-lg {
    font-family: var(--font-sans);
    letter-spacing: .01em;
    line-height: 1.363em;
    font-weight: 400;
    font-size: 16px;
}

@media screen and (min-width: 500px) {
  .text-lg, .body-lg, .text-body-lg {
    font-size: calc(13.72727px + .45455vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Body Text"
    :classes="['.text-base', '.body', '.text-body']">
      <template #example>
        <p>
          Our home loan application can take just 4 minutes to fill out if you’re prepared – that’s less time than it takes to drink your morning coffee. 
        </p>
      </template>
      <template #code>{{ 
      `
<p class="body">
  Our home loan application can take
  just 4 minutes to fill out
  if you’re prepared – 
  that’s less time than it takes to 
  drink your morning coffee. 
</p>
      ` }}</template>
      <template #declaration>
        {{ `
.text-base, .body, .text-body {
    font-family: var(--font-sans);
    letter-spacing: .01em;
    line-height: 1.363em;
    font-weight: 400;
    font-size: 14px;
}

@media screen and (min-width: 500px) {
  .text-base, .body, .text-body {
    font-size: calc(12.48485px + .30303vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Small Body Text"
    :classes="['.text-xs', '.subtitle', '.body-tag', 'text-body-xs']">
      <template #example>
        <p class="text-xs">
          By entering your phone number you expressly consent for WLTH to contact you via SMS Text message etc. By entering your phone number you express consent for WLTH to contact you via SMS Text message etc.
        </p>
      </template>
      <template #code>{{ 
      `
<p class="text-xs">
  Our home loan application can take
  just 4 minutes to fill out
  if you’re prepared – 
  that’s less time than it takes to 
  drink your morning coffee. 
</p>
      ` }}</template>
      <template #declaration>
        {{ `
.text-xs, .subtitle, .body-tag, .text-body-xs {
    color: var(--color-text-secondary);
    font-family: var(--font-mono);
    letter-spacing: -.06em;
    line-height: 1.444em;
    font-weight: 400;
    font-size: 12px;
}
          ` }}
      </template>
    </feature>
    <feature
    title="Link"
    preamble="Used when a link is standalone, prevents the bottom underline from stretching the width of the container"
    :classes="['.link']">
      <template #example>
        <a href="#" class="link">Get Started</a>
      </template>
      <template #code>{{ `
<a href="#" class="link">Get Started</a>` }}
      </template>
      <template #declaration>
        {{ `
.link, .inline-link {
    transition: color .3s ease-out;
    color: var(--color-text-tertiary);
    text-decoration: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.link {
    width: fit-content;
    border-bottom: 2px solid var(--color-turq);
}

.inline-link:hover, .link:hover {
    color: var(--color-turq)
}
          ` }}
      </template>
    </feature>
    <feature
    title="Inline Link"
    preamble="Used when a link is contained in a block of text. Prevents the border from impacting the text layout"
    :classes="['.inline-link']">
      <template #example>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" class="inline-link">Nemo maxime reiciendis</a> iure pariatur<br /> temporibus itaque excepturi alias similique qui soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Cum fugiat sed <a href="#" class="inline-link">vero recusandae</a> mollitia voluptatibus quos sequi dolores at nobis!</p>
      </template>
      <template #code>{{ `
<a href="#" class="inline-link">Get Started</a>` }}
      </template>
      <template #declaration>
        {{ `
.inline-link, .link {
    transition: color .3s ease-out;
    color: var(--color-text-tertiary);
    text-decoration: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.inline-link:hover, .link:hover {
    color: var(--color-turq)
}

.inline-link::after {
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: -2px;
    background: var(--color-turq);
}
          ` }}
      </template>
    </feature>
    <feature
    title="List Bullet Style"
    :classes="['.list-bullets']">
      <template #example>
        <ul class="list-bullets">
          <li>Contact Details of all Applicants</li>
          <li>Your online banking details</li>
          <li>Information about your assets</li>
        </ul>
      </template>
      <template #code>{{ `
<ul class="list-bullets">
  <li>Contact Details of all Applicants</li>
  <li>Your online banking details</li>
  <li>Information about your assets</li>
</ul>` }}</template>
      <template #declaration>
        {{ `
ol[class], ul[class] {
    list-style: none;
}

.list-bullets li {
    font-family: var(--font-sans);
    letter-spacing: .01em;
    line-height: 1.363em;
    font-weight: 500;
    color: #4c5a68;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: 14px;
}

.list-bullets li:before {
    content: "";
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 18px;
    border: 1px solid var(--color-text-secondary);
    left: 0;
    top: .3em;
}

@media screen and (min-width: 500px) {
  .list-bullets li {
    font-size: calc(12.48485px + .30303vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="List Ticks"
    :classes="['.list-ticks']">
      <template #example>
        <ul class="list-ticks">
          <li>Principle & Interest</li>
          <li>Interest Only</li>
        </ul>
      </template>
      <template #code>{{ `
<ul class="list-ticks"> 
  <li>Principle & Interest</li>  
  <li>Interest Only</li>
</ul>` }}</template>
      <template #declaration>
        {{ `
ol[class], ul[class] {
    list-style: none;
}

.list-ticks li {
    font-family: var(--font-sans);
    letter-spacing: .01em;
    line-height: 1.363em;
    font-weight: 500;
    color: var(--color-text-secondary);
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: 14px;
}

.list-ticks li:last-child {
    margin-bottom: 0;
}

.list-ticks li:before {
    width: calc(1em - 2px);
}

.list-ticks li:before {
    content: "";
    position: absolute;
    display: block;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cg data-name='Group 5891'%3E%3Cg data-name='Group 3883'%3E%3Ccircle data-name='Ellipse 333' cx='10' cy='10' r='10' fill='%231445C7'/%3E%3C/g%3E%3Cg data-name='Group 3902'%3E%3Cpath data-name='Path 12030' d='M7.841 13.91a.725.725 0 001.026.008l.008-.008 6.817-6.839a.725.725 0 00-1.011-1.03l-6.333 6.33-3.1-3.1a.731.731 0 00-1.033 1.033z' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 100% auto;
    background-position: 50%;
    background-repeat: no-repeat;
    height: 1.363em;
    left: 0;
    top: -.1em;
}

@media screen and (min-width: 500px) {
  .list-ticks li {
    font-size: calc(13.72727px + .45455vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="List Ticks Light"
    preamble="Used on dark backgrounds"
    :classes="['.list-ticks.light']">
      <template #example>
          <div style="padding: 1rem; background-color: var(--color-dblue); height: fit-content">
            <ul class="list-ticks light">
            <li>Principle & Interest</li>
            <li>Interest Only</li>
          </ul>
          </div>
      </template>
      <template #code>{{ `
<ul class="list-ticks light">
  <li>Principle & Interest</li>
  <li>Interest Only</li>
</ul>
          ` }}
      </template>
      <template #declaration>
        {{ `
ol[class], ul[class] {
    list-style: none;
}

.list-ticks li {
    font-family: var(--font-sans);
    letter-spacing: .01em;
    line-height: 1.363em;
    font-weight: 500;
    color: var(--color-text-secondary);
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: 14px;
}

.list-ticks li:last-child {
    margin-bottom: 0;
}

.list-ticks li:before {
    width: calc(1em - 2px);
}

.list-ticks li:before {
    content: "";
    position: absolute;
    display: block;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cg data-name='Group 5891'%3E%3Cg data-name='Group 3883'%3E%3Ccircle data-name='Ellipse 333' cx='10' cy='10' r='10' fill='%231445C7'/%3E%3C/g%3E%3Cg data-name='Group 3902'%3E%3Cpath data-name='Path 12030' d='M7.841 13.91a.725.725 0 001.026.008l.008-.008 6.817-6.839a.725.725 0 00-1.011-1.03l-6.333 6.33-3.1-3.1a.731.731 0 00-1.033 1.033z' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 100% auto;
    background-position: 50%;
    background-repeat: no-repeat;
    height: 1.363em;
    left: 0;
    top: -.1em;
}

.list-ticks.light li {
    color: var(--color-text-tertiary);
}

.list-ticks.light li:before {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cg data-name='Group 5891'%3E%3Cg data-name='Group 3883'%3E%3Ccircle data-name='Ellipse 333' cx='10' cy='10' r='10' fill='%2305E6DD'/%3E%3C/g%3E%3Cg data-name='Group 3902'%3E%3Cpath data-name='Path 12030' d='M7.841 13.91a.725.725 0 001.026.008l.008-.008 6.817-6.839a.725.725 0 00-1.011-1.03l-6.333 6.33-3.1-3.1a.731.731 0 00-1.033 1.033z' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

@media screen and (min-width: 500px) {
  .list-ticks li {
    font-size: calc(13.72727px + .45455vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Jump Menu"
    preamble="Nav items with link children"
    :classes="['.jump-menu']">
      <template #example>
        <nav class="jump-menu">
          <a href="#" class="current">Most Asked</a>
          <a href="#">Eligibility</a>
          <a href="#">Account</a>
          <a href="#">Terminology</a>
        </nav>
      </template>
      <template #code>{{ `
<nav class="jump-menu">
  <a href="#" class="current">Most Asked</a>
  <a href="#">Eligibility</a>
  <a href="#">Account</a>
  <a href="#">Terminology</a>
</nav>` }}</template>
      <template #declaration>
        {{ `
.jump-menu {
    display: flex;
    flex-direction: column;
}

.jump-menu a {
    font-family: var(--font-sans);
    letter-spacing: -.01em;
    line-height: 1.167em;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: .3em;
    color: var(--color-text-tertiary);
    padding-left: 1.2em;
    position: relative;
    font-size: 20px;
}

.jump-menu a.current {
    color: var(--color-text-base);
}

.jump-menu a:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: .25em;
    width: .6em;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='50' height='50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23B8C5CA'/%3E%3C/svg%3E");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top;
    border-radius: .3em;
}

.jump-menu a.current:before {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='50' height='50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23292E3A'/%3E%3C/svg%3E");
}

@media screen and (min-width: 500px) {
  .jump-menu a {
    font-size: calc(14.69697px + 1.06061vw);
  }
}
          ` }}
      </template>
    </feature>
    <feature
    title="Header Nav Links"
    :classes="['.header-menu']">
      <template #example>
        <nav class="header-menu">
          <a href="#">Home</a>
          <a href="#">Lending</a>
          <a href="#">Business</a>
          <a href="#">Vision</a>
          <a href="#">Press</a>
        </nav>
      </template>
      <template #code>{{ `
      <nav class="header-menu">
          <a href="#">Home</a>
          <a href="#">Lending</a>
          <a href="#">Business</a>
          <a href="#">Vision</a>
          <a href="#">Press</a>
        </nav>` }}</template>
      <template #declaration>
        {{ `
.header-menu {
    display: flex;
    flex-direction: row;
}

.header-menu a {
    transition: color .3s ease-out;
    position: relative;
    font-family: var(--font-sans);
    letter-spacing: .1em;
    line-height: 1.363em;
    text-transform: uppercase;
    font-size: 12px;
    color: var(--color-text-secondary);
    text-decoration: none;
    margin-right: 40px;
    font-weight: 500;
    z-index: 10;
}
          ` }}
      </template>
    </feature>
    <feature
    title="Button"
    :classes="['.btn']">
      <template #example>
        <button class="btn">
          Get Started
        </button>
      </template>
      <template #code>{{ `
<button class="btn">
  Get Started
</button>` }}</template>
      <template #declaration>
        {{ `
.btn {
    transition: color .3s ease-out,border-color .3s ease-out,background .3s ease-out;
    font-family: var(--font-mono);
    letter-spacing: .1em;
    line-height: 1.444em;
    font-weight: 400;
    font-size: 12px;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 25px;
    line-height: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid var(--color-border-base);
    background: var(--color-dblue-base);
    color: var(--color-white);
    width: fit-content;
}

.btn:hover {
    color: var(--color-turq-base)
}
          ` }}
      </template>
    </feature>
    <feature
    title="Button Outline"
    :classes="['.btn.outline']">
      <template #example>
        <button class="btn outline">
          Get Started
        </button>
      </template>
      <template #code>{{ `
<button class="btn outline">
  Get Started
</button>` }}</template>
      <template #declaration>
        {{ `
.btn.outline {
    transition: color .3s ease-out,border-color .3s ease-out,background .3s ease-out;
    font-family: var(--font-mono);
    letter-spacing: .1em;
    line-height: 1.444em;
    font-weight: 400;
    font-size: 12px;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 25px;
    line-height: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid var(--color-border-secondary);
    background: 0 0;
    color: var(--color-text-base);
}

.btn.outline:hover {
    color: var(--color-white);
    background: var(--color-mgrey-400)
}
          ` }}
      </template>
    </feature>
    <feature
    title="Text, Icon, and Border Colors"
    :classes="['.text-*', '.icon-*', '.border-base .border-*']">
      <template #example>
        <div style="display: flex; flex-flow: column; gap:0.25rem">
          <p class="text-secondary">text-secondary</p>
          <p class="text-tertiary">text-tertiary</p>
          <p class="text-disabled">text-disabled</p>
          <p class="icon-base">icon-base</p>
          <p class="icon-secondary">icon-secondary</p>
          <p class="icon-tertiary">icon-tertiary</p>
          <p class="icon-primary">icon-primary</p>
          <p class="icon-success">icon-success</p>
          <p class="icon-warning">icon-warning</p>
          <p class="icon-error">icon-error</p>
          <p class="border-base">border-base</p>
          <p class="border-base border-secondary">border-base border-secondary</p>
          <p class="border-base border-primary">border-base border-primary</p>
          <p class="border-base border-primary-secondary">border-base border-primary-secondary</p>
          <p class="border-base border-success">border-base border-success</p>
          <p class="border-base border-warning">border-base border-warning</p>
          <p class="border-base border-error">border-base border-error</p>
        </div>
      </template>
      <template #code>{{ `
<p class="text-secondary">text-secondary</p>
<p class="text-tertiary">text-tertiary</p>
<p class="text-disabled">text-disabled</p>
<p class="icon-base">icon-base</p>
<p class="icon-secondary">icon-secondary</p>
<p class="icon-tertiary">icon-tertiary</p>
<p class="icon-primary">icon-primary</p>
<p class="icon-success">icon-success</p>
<p class="icon-warning">icon-warning</p>
<p class="icon-error">icon-error</p>
<p class="border-base">border-base</p>
<p class="border-base border-secondary">border-base border-secondary</p>
<p class="border-base border-primary">border-base border-primary</p>
<p class="border-base border-primary-secondary">border-base border-primary-secondary</p>
<p class="border-base border-success">border-base border-success</p>
<p class="border-base border-warning">border-base border-warning</p>
<p class="border-base border-error">border-base border-error</p>` }}</template>
      <template #declaration>
{{ `
.text-secondary {
    color: var(--color-text-secondary);
}

.text-tertiary {
    color: var(--color-text-tertiary);
}

.text-disabled {
    color: var(--color-text-disabled);
}

.icon-base {
    color: var(--color-icon-base);
}

.icon-secondary {
    color: var(--color-icon-secondary);
}

.icon-tertiary {
    color: var(--color-icon-tertiary);
}

.icon-disabled {
    color: var(--color-icon-disabled);
}

.icon-primary {
    color: var(--color-icon-primary);
}

.icon-success {
    color: var(--color-icon-success);
}

.icon-warning {
    color: var(--color-icon-warning);
}

.icon-error {
    color: var(--color-icon-error);
}

.border-base {
    border: 2px solid var(--color-border-primary);
}

.border-secondary {
    border-color: var(--color-border-secondary);
}

.border-primary {
    border-color: var(--color-border-primary);
}

.border-primary-secondary {
    border-color: var(--color-border-primary-secondary);
}

.border-success {
    border-color: var(--color-border-success);
}

.border-warning {
    border-color: var(--color-border-warning);
}

.border-error {
    border-color: var(--color-border-error);
}
` }}
      </template>
    </feature>
    <feature
    title="Loading Skeleton"
    :classes="['.loading']">
      <template #example>
        <div class="loading" style="width:400px;height:200px">
          <p>still loading...</p>
        </div>
      </template>
      <template #code>
{{ `
<div class="loading" style="width:400px;height:200px">
  <p>still loading...</p>
</div>
` }}
      </template>
      <template #declaration>

        {{ `
.loading {
    background-color: var(--color-mgrey-300);
    animation: background-loading-gradient 0.9s ease-in-out infinite alternate;
  }

  .loading > * {
    opacity: 0 !important;
  }

  @keyframes background-loading-gradient {
    0% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 0%,
        var(--color-mgrey-300) 100%
      );
    }

    10% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 5%,
        var(--color-mgrey-300) 100%
      );
    }

    20% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 10%,
        var(--color-mgrey-300) 100%
      );
    }

    30% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 20%,
        var(--color-mgrey-300) 100%
      );
    }

    40% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 30%,
        var(--color-mgrey-300) 100%
      );
    }

    50% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 50%,
        var(--color-mgrey-300) 100%
      );
    }

    60% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 60%,
        var(--color-mgrey-300) 100%
      );
    }

    70% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 70%,
        var(--color-mgrey-300) 100%
      );
    }

    80% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 80%,
        var(--color-mgrey-300) 100%
      );
    }

    90% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 90%,
        var(--color-mgrey-300) 100%
      );
    }

    100% {
      background: linear-gradient(
        127deg,
        var(--color-mgrey-300) 0%,
        var(--color-mgrey-200) 100%,
        var(--color-mgrey-300) 100%
      );
    }
  }
` }}
      
      </template>
    </feature>
    <feature
    title="Colors"
    :classes="['--color-*']">
      <template #example>
        <colors />
      </template>
      <template #code>
{{`
<div 
style="
  width: 200px; 
  aspect-ratio: 1/1; 
  background-color: var(--color-dblue-base);"
></div>
 `}}
      </template>
      <template #declaration>
{{ `
:root {
    --color-transparent: transparent;
    --color-white: rgba(255, 255, 255, 1);
    --color-dblue: rgba(41, 56, 58, 1);
    --color-dblue-base: rgba(41, 56, 58, 1);
    --color-dblue-900: rgba(45, 48, 51, 1);
    --color-dblue-800: rgba(27, 29, 37, 1);
    --color-dblue-700: rgba(32, 35, 45, 1);
    --color-dblue-600: rgba(36, 40, 51, 1);
    --color-dblue-500: rgba(41, 46, 58, 1);
    --color-dblue-400: rgba(91, 94, 102, 1);
    --color-dblue-300: rgba(143, 145, 151, 1);
    --color-dblue-200: rgba(186, 188, 193, 1);
    --color-dblue-100: rgba(216, 217, 221, 1);
    --color-dblue-50: rgba(245, 245, 248, 1);
    --color-turq: rgba(5, 230, 221, 1);
    --color-turq-base: rgba(5, 230, 221, 1);
    --color-turq-900: rgba(2, 115, 111, 1);
    --color-turq-800: rgba(3, 148, 142, 1);
    --color-turq-700: rgba(4, 178, 171, 1);
    --color-turq-600: rgba(4, 202, 194, 1);
    --color-turq-500: rgba(5, 230, 221, 1);
    --color-turq-400: rgba(72, 236, 230, 1);
    --color-turq-300: rgba(130, 241, 238, 1);
    --color-turq-200: rgba(175, 245, 244, 1);
    --color-turq-100: rgba(210, 248, 249, 1);
    --color-turq-50: rgba(244, 252, 254, 1);
    --color-rblue: rgba(20, 69, 199, 1);
    --color-rblue-base: rgba(20, 69, 199, 1);
    --color-rblue-900: rgba(10, 35, 100, 1);
    --color-rblue-800: rgba(13, 45, 128, 1);
    --color-rblue-700: rgba(16, 54, 154, 1);
    --color-rblue-600: rgba(18, 61, 175, 1);
    --color-rblue-500: rgba(20, 69, 199, 1);
    --color-rblue-400: rgba(83, 119, 214, 1);
    --color-rblue-300: rgba(137, 162, 227, 1);
    --color-rblue-200: rgba(180, 195, 237, 1);
    --color-rblue-100: rgba(213, 221, 245, 1);
    --color-rblue-50: rgba(245, 246, 253, 1);
    --color-mgrey: rgba(137, 138, 145, 1);
    --color-mgrey-base: rgba(137, 138, 145, 1);
    --color-mgrey-900: rgba(76, 90, 104, 1);
    --color-mgrey-800: rgba(90, 103, 116, 1);
    --color-mgrey-700: rgba(109, 121, 133, 1);
    --color-mgrey-600: rgba(104, 106, 114, 1);
    --color-mgrey-500: rgba(137, 138, 145, 1);
    --color-mgrey-400: rgba(168, 169, 175, 1);
    --color-mgrey-300: rgba(195, 196, 201, 1);
    --color-mgrey-200: rgba(216, 217, 221, 1);
    --color-mgrey-100: rgba(217, 217, 217, 1);
    --color-mgrey-50: rgba(248, 249, 251, 1);
    --color-deepblue: rgba(22, 34, 75, 1);
    --color-deepblue-base: rgba(22, 34, 75, 1);
    --color-error: rgba(250, 3, 32, 1);
    --color-error-base: rgba(250, 3, 32, 1);
    --color-error-subdued: rgba(252, 174, 185, 1);
    --color-error-subdued-50: rgba(252, 244, 247, 1);
    --color-error-900: rgba(126, 2, 16, 1);
    --color-error-800: rgba(161, 2, 21, 1);
    --color-error-700: rgba(194, 3, 25, 1);
    --color-error-600: rgba(220, 3, 28, 1);
    --color-error-500: rgba(250, 3, 32, 1);
    --color-error-400: rgba(251, 70, 92, 1);
    --color-error-300: rgba(251, 128, 144, 1);
    --color-error-200: rgba(252, 174, 185, 1);
    --color-error-100: rgba(252, 209, 216, 1);
    --color-error-50: rgba(252, 244, 247, 1);
    --color-success: rgba(4, 202, 114, 1);
    --color-success-base: rgba(4, 202, 114, 1);
    --color-success-subdued: rgba(175, 237, 211, 1);
    --color-success-subdued-50: rgba(240, 250, 248, 1);
    --color-success-900: rgba(2, 101, 57, 1);
    --color-success-800: rgba(3, 130, 73, 1);
    --color-success-700: rgba(4, 157, 88, 1);
    --color-success-600: rgba(4, 178, 100, 1);
    --color-success-500: rgba(4, 202, 114, 1);
    --color-success-400: rgba(4, 202, 114, 1);
    --color-success-300: rgba(84, 218, 159, 1);
    --color-success-200: rgba(146, 231, 195, 1);
    --color-success-100: rgba(194, 241, 222, 1);
    --color-success-50: rgba(235, 249, 245, 1);
    --color-warning: rgba(255, 162, 0, 1);
    --color-warning-base: rgba(255, 162, 0, 1);
    --color-warning-subdued: rgba(253, 224, 176, 1);
    --color-warning-subdued-50: rgba(253, 248, 242, 1);
    --color-warning-900: rgba(128, 82, 0, 1);
    --color-warning-800: rgba(164, 105, 0, 1);
    --color-warning-700: rgba(197, 126, 0, 1);
    --color-warning-600: rgba(224, 143, 0, 1);
    --color-warning-500: rgba(255, 162, 0, 1);
    --color-warning-400: rgba(254, 186, 69, 1);
    --color-warning-300: rgba(254, 207, 129, 1);
    --color-warning-200: rgba(253, 224, 176, 1);
    --color-warning-100: rgba(253, 237, 212, 1);
    --color-warning-50: rgba(253, 248, 242, 1);
    --color-background: rgba(244, 244, 244, 1);
    --color-background-base: rgba(244, 244, 244, 1);
    --color-background-secondary: rgba(255, 255, 255, 1);
    --color-background-tertiary: rgba(236, 239, 240, 1);
    --color-background-disabled: rgba(216, 217, 221, 1);
    --color-text: rgba(41, 46, 58, 1);
    --color-text-base: rgba(41, 46, 58, 1);
    --color-text-secondary: rgba(122, 136, 144, 1);
    --color-text-tertiary: rgba(184, 197, 202, 1);
    --color-text-disabled: rgba(216, 217, 221, 1);
    --color-icon-base: rgba(32, 32, 32, 1);
    --color-icon-secondary: rgba(137, 137, 138, 1);
    --color-icon-tertiary: rgba(195, 195, 197, 1);
    --color-icon-primary: rgba(44, 113, 246, 1);
    --color-icon-success: rgba(4, 202, 114, 1);
    --color-icon-warning: rgba(255, 162, 0, 1);
    --color-icon-error: rgba(250, 3, 32, 1);
    --color-border: rgba(32, 32, 32, 1);
    --color-border-base: rgba(32, 32, 32, 1);
    --color-border-secondary: rgba(137, 137, 138, 1);
    --color-border-primary: rgba(20, 69, 199, 1);
    --color-border-primary-secondard: rgba(5, 230, 221, 1);
    --color-border-success: rgba(4, 202, 114, 1);
    --color-border-warning: rgba(255, 162, 0, 1);
    --color-border-error: rgba(250, 3, 32, 1);
  }
` }}
      </template>
    </feature>
    <feature
    title="Blank"
    preamble="Preamble"
    :classes="['.text-3xl', '.heading-lg']">
      <template #example>hello world</template>
      <template #code>{{ `code` }}</template>
      <template #declaration>{{ `declaration` }}</template>
    </feature>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.display-container {
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
  max-width: 99dvw;
  outline: 1px solid #000;
  padding: 4rem;
}
</style>