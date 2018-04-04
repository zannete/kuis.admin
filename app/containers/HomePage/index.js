/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import HorizontalText from "components/HorizontalText";

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="row">
        <div className="col-lg-8 offset-lg-2 my-4 card">
          <div class="card-body">
            <h1 class="card-title">Tambah Kuis</h1>
            <form>
              <HorizontalText title="Judul" placeholder="Buat judul keren mu disini..."/>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Cover Image</label>
                <div className="col-sm-9">
                  <button className="btn btn-secondary">Tambah Cover Image</button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <img className="img-fluid" src="http://via.placeholder.com/1200x700"/>
                </div>
              </div>
              <hr/>
              <HorizontalText title="Profile X" placeholder=""/>
              <HorizontalText title="Profile Y" placeholder=""/>
              <HorizontalText title="Profile Width" placeholder=""/>
              <HorizontalText title="Profile Height" placeholder=""/>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Jawaban</label>
                <div className="col-sm-9">
                  <button className="btn btn-secondary">Tambah Jawaban</button>
                </div>
              </div>
              <div className="form-group row">
                
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
