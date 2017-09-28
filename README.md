# fireform
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]

This project was bootstrapped with [nwb](https://github.com/insin/nwb)

## Table of Contents

- [FireForm](#fireform)
- [TO DO](#to-do)
- [License](#license)

### FireForm

`FireForm` is a special component created for usage with `redux-form`. It takes a `path` and an `uid` paramater to know where to get its data. The `name` propertie is the name of the `redux-form` Form name. All other properties are optional and wil be described in further documentation. It is importand to know that `FireForm` can only be used in Components that have the `withFirebase` called to access the `firebaseApp`.

Inside the `FireForm` we put as child our Form with the fields we want and the macig hapens :smile:

All fields will be filled with the data from the `path` and `uid` and if no `uid` is provided the form will be a Form that creates a new entry in your `path`.

And comes the cool thing. If you are in the Form working on fields and someone else changes some data. Every field that you haven't changed will be in realtime updated! Isn't that cool :smile:

```js

//...

    <FireForm
      firebaseApp={firebaseApp}
      name={'companie'}
      path={`${path}`}
      onSubmitSuccess={(values)=>{history.push('/companies');}}
      onDelete={(values)=>{history.push('/companies');}}
      handleCreateValues={this.handleCreateValues}
      uid={match.params.uid}>
      <Form /> // Here is your simple form
    </FireForm>

//...

```


## TO DO

- [X] integrate realtime fnctionality


## License

MIT @TarikHuber

[travis-image]: https://travis-ci.org/TarikHuber/fireform.svg?branch=master
[travis-url]: https://travis-ci.org/TarikHuber/fireform
[daviddm-image]: https://img.shields.io/david/TarikHuber/fireform.svg?style=flat-square
[daviddm-url]: https://david-dm.org/TarikHuber/fireform
[coverage-image]: https://img.shields.io/codecov/c/github/TarikHuber/fireform.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/TarikHuber/fireform
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://github.com/TarikHuber/fireform/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
