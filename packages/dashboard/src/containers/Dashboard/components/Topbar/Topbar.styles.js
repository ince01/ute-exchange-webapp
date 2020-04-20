import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition } from '@ute-exchange/utils';

const TopbarWrapper = styled.div`
  .topbar {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: ${props => (props['data-rtl'] === 'rtl' ? '0 265px 0 31px' : '0 31px 0 265px')};
    z-index: 1000;
    ${transition()};

    @media only screen and (max-width: 767px) {
      padding: ${props =>
        props['data-rtl'] === 'rtl' ? '0px 260px 0px 15px !important' : '0px 15px 0px 260px !important'};
    }

    &.collapsed {
      padding: ${props => (props['data-rtl'] === 'rtl' ? '0 109px 0 31px' : '0 31px 0 109px')};
      @media only screen and (max-width: 767px) {
        padding: ${props => (props['data-rtl'] === 'rtl' ? '0px 15px !important' : '0px 15px !important')};
      }
    }

    .left {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 767px) {
        margin: ${props => (props['data-rtl'] === 'rtl' ? '0 0 0 20px' : '0 20px 0 0')};
      }

      .triggerBtn {
        font-size: 18px;
        height: 100%;
        display: -webkit-inline-flex;
        display: -ms-inline-flex;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 0;
        outline: 0;
        position: relative;
        cursor: pointer;

        &:before {
          content: '\f20e';
          font-family: 'Ionicons';
          font-size: 26px;
          color: inherit;
          line-height: 0;
          position: absolute;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      li {
        margin-left: ${props => (props['data-rtl'] === 'rtl' ? '35px' : '0')};
        margin-right: ${props => (props['data-rtl'] === 'rtl' ? '0' : '35px')};
        cursor: pointer;
        line-height: normal;
        position: relative;
        display: inline-block;

        @media only screen and (max-width: 360px) {
          margin-left: ${props => (props['data-rtl'] === 'rtl' ? '25px' : '0')};
          margin-right: ${props => (props['data-rtl'] === 'rtl' ? '0' : '25px')};
        }

        &:last-child {
          margin: 0;
        }

        i {
          font-size: 24px;
          color: ${palette('text', 0)};
          line-height: 1;
        }
      }
    }
  }
`;

export default TopbarWrapper;
