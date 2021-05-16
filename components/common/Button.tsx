import React from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  accessibilityLabel?: string;
  color?: 'grey' | 'accent' | 'primary' | 'warning' | 'transparent';
  disabled?: boolean;
  inline?: boolean;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
}

interface Button extends BaseButtonProps {
  accessibilityHasPopup?: boolean;
  selected?: boolean;
  type?: 'button';
  role?: 'button';
}

interface SubmitButton extends BaseButtonProps {
  type: 'submit';
  role?: 'button';
}

interface LinkButton extends BaseButtonProps {
  href: string;
  rel?: 'none' | 'nofollow';
  role: 'link';
  target?: null | 'self' | 'blank';
}

type ButtonProps = Button | SubmitButton | LinkButton;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  accessibilityLabel,
  color = 'grey',
  disabled = false,
  inline = false,
  onClick,
  size = 'medium',
  name,
  children,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {};

  if (props.role === 'link') {
    return (
      <LinkButtonStyles
        aria-label={accessibilityLabel}
        href={props.href}
        rel={props.rel}
        onClick={handleLinkClick}
        type="button"
        role="link"
        size={size}
        color={color}
        inline={inline}
      >
        {children}
      </LinkButtonStyles>
    );
  }

  if (props.role === 'button' && props.type === 'submit') {
    return (
      <ButtonStyles
        aria-label={accessibilityLabel}
        disabled={disabled}
        name={name}
        onClick={handleClick}
        type="submit"
        color={color}
        size={size}
        inline={inline}
      >
        {children}
      </ButtonStyles>
    );
  }

  if (props.role === 'button' && props.type === 'button') {
    return (
      <ButtonStyles
        aria-haspopup={props.accessibilityHasPopup}
        aria-label={accessibilityLabel}
        disabled={disabled}
        name={name}
        onClick={handleClick}
        size={size}
        color={color}
        type="button"
        inline={inline}
      >
        {children}
      </ButtonStyles>
    );
  }

  return null;
};

type ButtonStylesProps = Required<Pick<ButtonProps, 'size' | 'color' | 'inline'>>;
const LinkButtonStyles = styled.a<ButtonStylesProps>``;

const ButtonStyles = styled.button<ButtonStylesProps>`
  box-sizing: border-box;
  min-width: 60px;
  border-radius: 24px;
  border: none;
  transition: 0.2s linear;
  display: block;
  cursor: pointer;

  &:disabled {
    color: var(--colorGrey40);
    background: var(--colorGrey20);

    & :hover {
      cursor: default;
      background: var(--colorGrey20);
    }
  }

  ${({ size }) => {
    return size === 'small'
      ? `
        min-height: 32px;
        padding: 8px 16px;
      `
      : size === 'medium'
      ? `
        min-height: 40px;
        padding: 12px 24px;
      `
      : `
      min-height: 48px;
      padding: 16px 24px;
    `;
  }}

  ${({ color }) => {
    return color === 'primary'
      ? `
      color: var(--colorGrey100);
      background: var(--colorGold80);

      &:hover, :focus {
        background: var(--colorGold60);
      }
    `
      : color === 'accent'
      ? `
      color: var(--colorGrey0);
      background: var(--colorBlue100);

      &:hover, :focus {
        background: var(--colorBlue80);
      }
    `
      : color === 'grey'
      ? `
      color: var(--colorGrey0);
      background: var(--colorGrey100);

      &:hover, :focus {
        background: var(--colorGrey80);
      }
    `
      : color === 'transparent'
      ? `
      color: var(--colorTransparentWhite);
      background: var(--colorTransparentDarkGrey);

      &:hover, :focus {
        background: var(--colorTransparentGrey800);
      }
    `
      : `
      color: var(--colorGrey0);
      background: var(--colorRed100);

      &:hover, :focus {
        background: var(--colorRed0);
      }
    `;
  }}

  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
  `}
`;

export default Button;
