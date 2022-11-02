
import { KeyboardEvent, LegacyRef, useEffect, useRef, useState } from "react";
import {CloseIcon} from "./close"
import classes from "./styles.module.css";


export const Dropdown = (props) => {
  const {
    options,
    value,
    onChange,
    onInputChange,
    placeholder,
    rootStyle,
    noBorder,
    hideEmptyList,
    filterOptions = true,
    inputStyle = "",
    disableClearable = false,
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [newValue, setNewValue] = useState("");
  const ref = useRef(null);
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    if (value?.label) {
      setNewValue(value?.label);
    }
  }, [value]);

  useEffect(() => {
    if (!showOptions) {
      setNewValue(newValue?.length && value?.label ? value?.label : "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showOptions]);

  const select = (option) => {
    setNewValue(option?.label || "");
    onChange(option);
    setShowOptions(false);
  };

  const handleChange = (text) => {
    setNewValue(text);
    if (!text?.length) {
      onChange(null);
    }
    if (onInputChange) {
      onInputChange(text);
    }
    setCursor(-1);
    if (!showOptions) {
      setShowOptions(true);
    }
  };

  const filteredOptions =
    newValue && filterOptions
      ? options.filter((option) => option.label?.toLowerCase()?.includes(newValue?.toLowerCase()))
      : options;

  const moveCursorDown = () => {
    if (cursor < filteredOptions.length - 1) {
      setCursor((c) => c + 1);
    }
  };

  const moveCursorUp = () => {
    if (cursor > 0) {
      setCursor((c) => c - 1);
    }
  };

  const onClickClear = () => {
    setNewValue("");
    onChange(null);
  };

  const handleNav = (e) => {
    switch (e.key) {
      case "ArrowUp":
        moveCursorUp();
        break;
      case "ArrowDown":
        moveCursorDown();
        break;
      case "Enter":
        if (cursor >= 0 && cursor < filteredOptions.length) {
          select(filteredOptions[cursor]);
        }
        break;
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (!(ref.current && ref.current.contains(e.target))) {
        setShowOptions(false);
        setCursor(-1);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("focusin", listener);
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("focusin", listener);
    };
  }, []);

  const onHover = () => {
    setShowClear(true);
  };

  const hideClearButton = () => {
    setShowClear(false);
  };

  return (
    <div
      className={rootStyle || classes.root}
      ref={ref }
      onMouseEnter={onHover}
      onMouseLeave={hideClearButton}>
      <input
        type="text"
        className={`${classes.textInput} ${noBorder ? "border-none" : ""} ${inputStyle}`}
        value={newValue || value?.label || ""}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
        onKeyDown={handleNav}
        placeholder={placeholder}
      />

      <ul
        className={`${classes.list} ${
          (!showOptions || (hideEmptyList && filteredOptions.length === 0)) && classes.hiddenList
        }`}>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, i,arr) => {
            let className = `${classes.listItem} `;

            if (arr.length === 1) className += classes.singleItem;
            else if (i === 0) className += classes.firstItem;
            else if (i === arr.length) className += classes.lastItem;
            else className += classes.intermediateItem;

            if (cursor === i) {
              className += classes.hoveredItem;
            }

            return (
              <li className={className} key={option.value} onClick={() => select(option)}>
                {option.label}
              </li>
            );
          })
        ) : (
          <li className={classes.emptyMessage}>No results</li>
        )}
      </ul>
      <div className={classes.iconContainer} onClick={() => setShowOptions(!showOptions)}>
        {!disableClearable && showClear && value?.value && (
          <div className={classes.closeIcon} onClick={onClickClear}>
            <CloseIcon />
          </div>
        )}
        {(!hideEmptyList || filteredOptions.length !== 0) && (
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        )}
      </div>
    </div>
  );
};

