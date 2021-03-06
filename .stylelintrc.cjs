module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'alpha-value-notation': 'number',
    // 'at-rule-allowed-list':,
    // 'at-rule-blacklist':,
    // 'at-rule-disallowed-list':,
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
    }],
    'at-rule-name-case': 'lower',
    // 'at-rule-name-newline-after':,
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['import-glob']
    }],
    // 'at-rule-no-vendor-prefix':,
    // 'at-rule-property-required-list':,
    // 'at-rule-property-requirelist':,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    // 'at-rule-whitelist':,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    // 'block-opening-brace-newline-before':,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    // 'color-function-notation':,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    // 'color-no-hex':,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    }],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    // 'comment-word-blacklist':,
    // 'comment-word-disallowed-list':,
    // 'custom-media-pattern':,
    // 'custom-property-empty-line-before': ['always', {
    //   except: ['after-custom-property', 'first-nested'],
    //   ignore: ['after-comment', 'inside-single-line-block'],
    // }],
    // 'custom-property-pattern':,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
    }],
    // 'declaration-block-no-redundant-longhand-properties':,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // 'declaration-block-semicolon-newline-before':,
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    // 'declaration-colon-newline-after':,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': ['always', {
      except: ['after-declaration', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    }],
    // 'declaration-no-important':,
    // 'declaration-property-unit-allowed-list':,
    // 'declaration-property-unit-blacklist':,
    // 'declaration-property-unit-disallowed-list':,
    'declaration-property-unit-whitelist': {
      'line-height': [],
    },
    // 'declaration-property-value-allowed-list':,
    // 'declaration-property-value-blacklist':,
    // 'declaration-property-value-disallowed-list':,
    // 'declaration-property-value-whitelist':,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    // 'font-weight-notation':,
    // 'function-allowed-list':,
    // 'function-blacklist':,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    // 'function-disallowed-list':,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    // 'function-url-scheme-allowed-list':,
    // 'function-url-scheme-blacklist':,
    // 'function-url-scheme-disallowed-list':,
    // 'function-url-scheme-whitelist':,
    // 'function-whitelist':,
    'function-whitespace-after': 'always',
    // 'hue-degree-notation':,
    indentation: [2, {
      ignore: ['inside-parens', 'param', 'value'],
    }],
    'keyframe-declaration-no-important': true,
    // 'keyframes-name-pattern':,
    'length-zero-no-unit': true,
    linebreaks: 'unix',
    'max-empty-lines': 2,
    // 'max-line-length':,
    // 'max-nesting-depth':,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    // 'media-feature-name-allowed-list':,
    // 'media-feature-name-blacklist':,
    'media-feature-name-case': 'lower',
    // 'media-feature-name-disallowed-list':,
    'media-feature-name-no-unknown': true,
    // 'media-feature-name-no-vendor-prefix':,
    // 'media-feature-name-value-allowed-list':,
    // 'media-feature-name-value-whitelist':,
    // 'media-feature-name-whitelist':,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    // 'no-descending-specificity':,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'always',
    'number-max-precision': 3,
    'number-no-trailing-zeros': true,
    // 'property-allowed-list':,
    // 'property-blacklist':,
    'property-case': 'lower',
    // 'property-disallowed-list':,
    'property-no-unknown': true,
    // 'property-no-vendor-prefix':,
    // 'property-whitelist':,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],
    'selector-attribute-brackets-space-inside': 'never',
    // 'selector-attribute-operator-allowed-list':,
    // 'selector-attribute-operator-blacklist':,
    // 'selector-attribute-operator-disallowed-list':,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    // 'selector-attribute-operator-whitelist':,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '^[A-Z][a-zA-Z0-9]*(__[a-z0-9]+[a-zA-Z0-9]*)?(--[a-z0-9]+[-a-zA-Z0-9]*)?$',
    // 'selector-combinator-allowed-list':,
    // 'selector-combinator-blacklist':,
    // 'selector-combinator-disallowed-list':,
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    // 'selector-combinator-whitelist':,
    'selector-descendant-combinator-no-non-space': true,
    // 'selector-id-pattern':,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    // 'selector-max-attribute':,
    // 'selector-max-class':,
    // 'selector-max-combinators':,
    // 'selector-max-compound-selectors':,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    // 'selector-max-pseudo-class':,
    // 'selector-max-specificity':,
    // 'selector-max-type':,
    // 'selector-max-universal':,
    // 'selector-nested-pattern':,
    // 'selector-no-qualifying-type':,
    // 'selector-no-vendor-prefix':,
    // 'selector-pseudo-class-allowed-list':,
    // 'selector-pseudo-class-blacklist':,
    'selector-pseudo-class-case': 'lower',
    // 'selector-pseudo-class-disallowed-list':,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // 'selector-pseudo-class-whitelist':,
    // 'selector-pseudo-element-allowed-list':,
    // 'selector-pseudo-element-blacklist':,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    // 'selector-pseudo-element-disallowed-list':,
    'selector-pseudo-element-no-unknown': true,
    // 'selector-pseudo-element-whitelist':,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    // 'time-min-milliseconds':,
    // 'unicode-bom':,
    // 'unit-allowed-list':,
    // 'unit-blacklist':,
    'unit-case': 'lower',
    // 'unit-disallowed-list':,
    'unit-no-unknown': true,
    // 'unit-whitelist':,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    // 'value-no-vendor-prefix': true


    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-order': [
      // All

      'all',


      // Position

      'position',
      'top',
      'right',
      'bottom',
      'left',
      'inset',
      'inset-block',
      'inset-block-start',
      'inset-block-end',
      'inset-inline',
      'inset-inline-start',
      'inset-inline-end',
      'z-index',


      // Display mode

      'display',
      'grid',
      'grid-template',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-area',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'order',
      'place-content',
      'place-items',
      'place-self',
      'justify-content',
      'justify-items',
      'justify-self',
      'align-content',
      'align-items',
      'align-self',
      'grid-gap',
      'gap',
      'grid-row-gap',
      'row-gap',
      'grid-column-gap',
      'column-gap',
      'float',
      'clear',
      'box-sizing',
      'writing-mode',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'inline-size',
      'min-inline-size',
      'max-inline-size',
      'block-size',
      'min-block-size',
      'max-block-size',
      'aspect-ratio',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-block',
      'margin-block-start',
      'margin-block-end',
      'margin-inline',
      'margin-inline-start',
      'margin-inline-end',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'padding-block',
      'padding-block-start',
      'padding-block-end',
      'padding-inline',
      'padding-inline-start',
      'padding-inline-end',
      'object-fit',
      'object-position',
      'overflow',
      'overflow-x',
      'overflow-y',
      'overflow-block',
      'overflow-inline',
      '-webkit-overflow-scrolling',
      '-ms-overflow-style',
      'scroll-behavior',
      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-snap-type',
      'scroll-margin',
      'scroll-margin-right',
      'scroll-margin-bottom',
      'scroll-margin-left',
      'scroll-margin-top',
      'scroll-margin-block',
      'scroll-margin-block-start',
      'scroll-margin-block-end',
      'scroll-margin-inline',
      'scroll-margin-inline-start',
      'scroll-margin-inline-end',
      'scroll-padding',
      'scroll-padding-top',
      'scroll-padding-right',
      'scroll-padding-bottom',
      'scroll-padding-left',
      'scroll-padding-block',
      'scroll-padding-block-start',
      'scroll-padding-block-end',
      'scroll-padding-inline',
      'scroll-padding-inline-start',
      'scroll-padding-inline-end',
      'overscroll-behavior',
      'overscroll-behavior-x',
      'overscroll-behavior-y',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',


      // Typography

      'color',
      'font',
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
      'font-display',
      'font-variant',
      'font-variant-alternates',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-position',
      // 'font-feature-settings',
      // 'font-variation-settings',
      // 'font-named-instance',
      // 'font-language-override',
      // 'font-optical-sizing',
      // 'font-synthesis',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      '-webkit-font-smoothing',
      '-moz-osx-font-smoothing',
      'font-smooth',
      'font-kerning',
      'line-height',
      'direction',
      'letter-spacing',
      'white-space',
      'text-align',
      'text-align-last',
      'text-transform',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-style',
      'text-underline-position',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      'text-justify',
      'text-outline',
      'text-wrap',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-orientation',
      'text-combine-upright',
      'text-shadow',
      'text-rendering',
      '-webkit-text-size-adjust',
      '-ms-text-size-adjust',
      'vertical-align',
      'word-wrap',
      'word-break',
      'word-spacing',
      'overflow-wrap',
      'hanging-punctuation',
      'tab-size',
      'hyphens',
      'unicode-bidi',
      'columns',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-span',
      'column-width',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'break-after',
      'break-before',
      'break-inside',
      'orphans',
      'widows',
      'src',
      'unicode-range',


      // Visual

      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'table-layout',
      'empty-cells',
      'caption-side',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-size',
      'background-clip',
      'background-origin',
      'background-attachment',
      'background-blend-mode',
      'box-decoration-break',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-block',
      'border-block-width',
      'border-block-style',
      'border-block-color',
      'border-block-start',
      'border-block-start-width',
      'border-block-start-style',
      'border-block-start-color',
      'border-block-end',
      'border-block-end-width',
      'border-block-end-style',
      'border-block-end-color',
      'border-inline',
      'border-inline-width',
      'border-inline-style',
      'border-inline-color',
      'border-inline-start',
      'border-inline-start-width',
      'border-inline-start-style',
      'border-inline-start-color',
      'border-inline-end',
      'border-inline-end-width',
      'border-inline-end-style',
      'border-inline-end-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-start-start-radius',
      'border-start-end-radius',
      'border-end-start-radius',
      'border-end-end-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-collapse',
      'border-spacing',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      'visibility',
      'cursor',
      'mix-blend-mode',
      'backdrop-filter',
      'will-change',
      'transform',
      'transform-origin',
      'transform-style',
      'transform-box',
      'backface-visibility',
      'perspective',
      'perspective-origin',
      'opacity',
      'filter',
      'isolation',


      // Transitions and Animation

      'transition',
      'transition-delay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',


      // Accessibility and Interactions

      'appearance',
      'clip',
      'clip-path',
      'shape-outside',
      'shape-image-threshold',
      'shape-margin',
      'mask',
      'mask-image',
      'mask-mode',
      'mask-repeat',
      'mask-position',
      'mask-clip',
      'mask-origin',
      'mask-size',
      'mask-composite',
      'mask-type',
      'caret-color',
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'counter-set',
      'resize',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      'pointer-events',
      'touch-action',
      'zoom',


      // SVG

      'fill',
      'fill-rule',
      'clip-rule',
      'stroke',
      'stroke-width',
    ]
  }
};
