/* eslint-disable react/require-default-props */
import React from 'react';
import { ApolloError } from '@apollo/client';
import { styled } from 'styled-components';
import { Alert } from 'react-bootstrap';
import {
  colorBlackBackground,
  colorBlue,
  colorRed,
  colorWhite,
  colorYellow,
} from '@/styles/palette';

interface NotificationMessageProps {
  children?: React.ReactNode;
  color: ColorProps;
  title?: string;
}

interface NotificationProps {
  error?: ApolloError;
  message?: string;
  color: ColorProps;
  title?: string;
  fullWidth?: boolean;
}

type ColorProps = 'light' | 'dark' | 'primary' | 'success' | 'warning' | 'danger';

const renderColor = (color: ColorProps) => {
  switch (color) {
    case 'dark':
      return colorBlackBackground;
    case 'primary':
      return colorBlue;
    case 'warning':
      return colorYellow;
    case 'danger':
      return colorRed;
    default:
      return colorBlackBackground;
  }
};

const NotificationMessage = ({ children, color, title }: NotificationMessageProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <Alert
      variant={color}
      show={!!children && isOpen}
      onClick={handleClick}
      style={{ color: colorWhite, background: renderColor(color) }}
    >
      {title && <NotificationTitle>{title}</NotificationTitle>}
      {children}
    </Alert>
  );
};

const Notification = ({ error, message, color, title, fullWidth }: NotificationProps) => {
  const defaultErrorMessage = 'Something went wrong, please try again';

  return (
    <Container fullWidth={fullWidth}>
      {error ? (
        // Display network error
        error.networkError ? (
          <NotificationMessage color={color} title={title}>
            {error.networkError.message}
          </NotificationMessage>
        ) : error.graphQLErrors && error.graphQLErrors.length > 0 ? (
          error.graphQLErrors.map((graphQLError, i) => {
            // Display graphQL error
            // TODO: we may need to add more specifi error types in the future
            if (graphQLError.originalError?.message) {
              return (
                <NotificationMessage key={i} color={color} title={title}>
                  {graphQLError.originalError.message}
                </NotificationMessage>
              );
            }
            return null;
          })
        ) : (
          // Display default error message if some unkown graphQL errors occured
          <NotificationMessage color={color} title={title}>
            {defaultErrorMessage}
          </NotificationMessage>
        )
      ) : (
        // Display success message
        message && (
          <NotificationMessage color={color} title={title}>
            {message}
          </NotificationMessage>
        )
      )}
    </Container>
  );
};

export default Notification;

const Container = styled.div<{ fullWidth?: boolean }>`
  max-width: 480px;
  position: fixed;
  top: 10;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 1030;
  cursor: pointer;
  ${(props) =>
    props.fullWidth &&
    `
  max-width: 100vw;
  `}
`;

const NotificationTitle = styled.h5`
  margin-bottom: 8px;
  font-weight: 700;
  color: ${colorWhite};
`;
