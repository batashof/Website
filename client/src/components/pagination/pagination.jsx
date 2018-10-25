import React, { Component } from "react";
import "./pagination.css";

class Pagination extends Component {
  defineNumbers(page) {
    let numbers = [page];
    let lastPage = this.props.pages;
    let maxPages;

    switch (page) {
      case 1:
      case lastPage:
        maxPages = 3;
        break;
      case lastPage - 1:
      case 2:
        maxPages = 4;
        break;
      default:
        maxPages = this.props.maxPages;
    }

    if (this.props.pages <= maxPages) {
      maxPages = this.props.pages - 1;
    }

    while (numbers.length < maxPages) {
      let flag = -1;

      if (page === 1 || page === 2) {
        flag = 1;
      }

      if (flag === -1) {
        numbers.unshift(numbers[0] - 1);
        flag = 1;
      }

      if (flag === 1) {
        if (numbers[numbers.length - 1] < lastPage) {
          numbers.push(numbers[numbers.length - 1] + 1);
        }
      }

      if (page > lastPage || page < 0) {
        return numbers;
      }
    }

    if (numbers[0] === 2) {
      numbers.unshift(1);
    }

    if (numbers[numbers.length - 1] === lastPage - 1) {
      numbers.push(lastPage);
    }

    return numbers;
  }

  showFirstNumber(numbers) {
    if (numbers[0] > 2)
      return (
        <li
          className={
            this.props.currentPage === 1
              ? "NewsPagination__number NewsPagination__number_first NewsPagination__number_active"
              : "NewsPagination__number NewsPagination__number_first"
          }
          onClick={e => this.props.onPageChange(1)}
        >
          1
        </li>
      );
  }

  showLastNumber(numbers) {
    if (numbers[numbers.length - 1] < this.props.pages - 1)
      return (
        <li
          className={
            this.props.currentPage === this.props.size
              ? "NewsPagination__number NewsPagination__number_last NewsPagination__number_active"
              : "NewsPagination__number NewsPagination__number_last"
          }
          onClick={e => this.props.onPageChange(this.props.pages)}
        >
          {this.props.pages}
        </li>
      );
  }

  renderPages(page) {
    if (this.props.numbers) {
      let numbers = this.defineNumbers(page);
      let paginationNumbers = numbers.map(number => {
        return (
          <li
            key={number}
            className={
              this.props.currentPage === number
                ? "NewsPagination__number NewsPagination__number_active"
                : "NewsPagination__number"
            }
            onClick={e => this.props.onPageChange(number)}
          >
            {number}
          </li>
        );
      });
      return (
        <ul className="NewsPagination__list">
          {this.showFirstNumber(numbers)}
          {paginationNumbers}
          {this.showLastNumber(numbers)}
        </ul>
      );
    }
  }

  renderNext() {
    if (this.props.navButtons) {
      return (
        <button
          className={
            this.props.hideNext
              ? "NewsPagination__item NewsPagination__item_hide"
              : "NewsPagination__item"
          }
          onClick={e => this.props.onPageChange("next")}
        >
          Next »
        </button>
      );
    }
  }

  renderPrev() {
    if (this.props.navButtons) {
      return (
        <button
          className={
            this.props.hidePrev
              ? "NewsPagination__item NewsPagination__item_hide"
              : "NewsPagination__item"
          }
          onClick={e => this.props.onPageChange("previous")}
        >
          « Previous
        </button>
      );
    }
  }

  render() {
    return (
      <div className="NewsPagination">
        {this.renderPrev()}
        <div className="NewsPagination__item NewsPagination__item_numbers">
          {this.renderPages(this.props.currentPage)}
        </div>
        {this.renderNext()}
      </div>
    );
  }
}

Pagination.defaultProps = {
  currentPage: 1,
  hidePrev: true,
  hideNext: false
};

export default Pagination;
