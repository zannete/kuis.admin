/**
 *
 * TambahKuisPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTambahKuisPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as action from "./actions";

import { PulseLoader } from 'halogen'
import HorizontalText from "components/HorizontalText";

export class TambahKuisPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.btnTambahCoverImage = null;
    this.btnTambahJawaban = null;
    
    this.onTambahCoverImageChange = this.onTambahCoverImageChange.bind(this);
    this.onTambahJawabanChange = this.onTambahJawabanChange.bind(this);
  }
  
  onTambahCoverImageChange(){
    if(this.btnTambahCoverImage.files && this.btnTambahCoverImage.files[0]){
      var reader = new FileReader();
      reader.onload = e => {
        this.props.dispatch(action.setCoverImage(e.target.result));
      }
      reader.readAsDataURL(this.btnTambahCoverImage.files[0])
    }
  }
  
  onTambahJawabanChange(){
    if(this.btnTambahJawaban.files && this.btnTambahJawaban.files[0]){
      var reader = new FileReader();
      reader.onload = e => {
        this.props.dispatch(action.addJawaban(e.target.result))
      }
      reader.readAsDataURL(this.btnTambahJawaban.files[0])
    }
  }

  render() {
    const loadingComponent =  (
      <section className="row mt-4">
        <div className="col-lg-12 text-center">
          <PulseLoader color="#FFD5D6" size="16px" margin="4px"/>
        </div>
      </section>
    )
    const mainComponent = (
      <section className="row">
        <div className="col-lg-8 offset-lg-2 my-4 card">
          <div className="card-body">
            <div className="card-title row">
              <div className="col-lg-6">
                <h1>Tambah Kuis</h1>
              </div>
              <div className="col-lg-6 text-right">
                <button className="btn btn-primary" onClick={this.props.onSimpanKuisClick}>Simpan Kuis</button>
              </div>
            </div>
            <form>
              <HorizontalText 
                title="Judul" 
                placeholder="Buat judul keren mu disini..."
                onChange={this.props.onJudulChange}
                value={this.props.tambahKuisPage.judul}/>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Cover Image</label>
                <div className="col-sm-9">
                  <label className="btn btn-secondary btn-file">
                    Tambah Cover Image <input ref={i => this.btnTambahCoverImage = i} type="file" style={{display: "none"}} onChange={this.onTambahCoverImageChange}/>
                  </label>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <img className="img-fluid" src={this.props.tambahKuisPage.coverImage}/>
                </div>
              </div>
              <hr/>
              <HorizontalText 
                title="Profile X" 
                onChange={this.props.onProfileXChange}
                value={this.props.tambahKuisPage.profileX}/>
              <HorizontalText 
                title="Profile Y"
                onChange={this.props.onProfileYChange}
                value={this.props.tambahKuisPage.profileY}/>
              <HorizontalText 
                title="Profile Width"
                onChange={this.props.onProfileWidthChange}
                value={this.props.tambahKuisPage.profileWidth}/>
              <HorizontalText 
                title="Profile Height"
                onChange={this.props.onProfileHeightChange}
                value={this.props.tambahKuisPage.profileHeight}/>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Jawaban</label>
                <div className="col-sm-9">
                  <label className="btn btn-secondary btn-file">
                    Tambah Jawaban <input ref={i => this.btnTambahJawaban = i} type="file" style={{display: "none"}} onChange={this.onTambahJawabanChange}/>
                  </label>
                </div>
              </div>
              <div className="form-group row">
                {this.props.tambahKuisPage.listJawaban.map((value, index) => {
                  return (
                    <div className="col-lg-4 mb-4">
                      <img className="img-fluid" src={value}/>
                    </div>
                  )
                })}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
    return (this.props.tambahKuisPage.isSaving)?loadingComponent: mainComponent;
  }
}

TambahKuisPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tambahKuisPage: makeSelectTambahKuisPage()
});

function mapDispatchToProps(dispatch) {return {
  dispatch,
  onJudulChange: (e) => {dispatch(action.onJudulChange(e.target.value))},
  onProfileXChange: (e) => {dispatch(action.onProfileXChange(e.target.value))},
  onProfileYChange: (e) => {dispatch(action.onProfileYChange(e.target.value))},
  onProfileWidthChange: (e) => {dispatch(action.onProfileWidthChange(e.target.value))},
  onProfileHeightChange: (e) => {dispatch(action.onProfileHeightChange(e.target.value))},
  onSimpanKuisClick: () => {dispatch(action.onSimpanKuisClick())}
}}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tambahKuisPage', reducer });
const withSaga = injectSaga({ key: 'tambahKuisPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TambahKuisPage);
