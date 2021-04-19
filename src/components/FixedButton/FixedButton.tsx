import React, { Component } from 'react';
import styles from './FixedButton.module.scss';


export interface FixedButtonProps {
  openUrl: string;
}

class FixedButton extends Component<FixedButtonProps> {
  render() {
    return (
        <div className={styles['fixed-button']} onClick={this.onOpenUrl}>button</div>
    );
  }

  private onOpenUrl = () => {
    const { openUrl } = this.props;
    window.open(openUrl);
  }
}

export default FixedButton;