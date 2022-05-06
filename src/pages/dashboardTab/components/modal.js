import React, { useRef } from 'react';
import {
  withStyles,
} from '@material-ui/core';
import {
  fetchAllFileIDsForSelectAll, getCountForAddAllFilesModal, getFilesCount, clearTableSelections,
} from '../store/dashboardReducer';
import Dialog from '../../../components/AddToCartDialog';
import { addToCart, cartWillFull, getFilesIdsInCart } from '../../fileCentricCart/store/cart';

const styles = () => ({
  button: {
    borderRadius: '10px',
    width: '120px',
    lineHeight: '37px',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    color: '#fff',
    backgroundColor: '#142D64',
    marginTop: '6px',
    marginBottom: '10px',
    marginRight: '24px',
  },
});

const SelectAllModalDialog = ({
  classes, openSnack,
}) => {
  const childRef = useRef();

  const handleClickOpen = () => {
    childRef.current.open();
  };

  const handleClose = () => {
    childRef.current.close();
  };

  async function exportFiles() {
    // Find the newly added files by comparing
    const getAllFilesData = await fetchAllFileIDsForSelectAll(getFilesCount());
    const currentFileIdsInCart = getFilesIdsInCart();

    let newFileCount = getAllFilesData.length;
    // eslint-disable-next-line no-unused-expressions
    currentFileIdsInCart.length && getAllFilesData.map((data) => {
      const isIndex = currentFileIdsInCart.findIndex((file) => file.uuid === data.uuid);
      if (isIndex >= 0) {
        newFileCount -= 1;
      }
      return newFileCount;
    });
    openSnack(newFileCount || 0);
    addToCart({ fileIds: getAllFilesData });
    // tell the reducer to clear the selection on the table.
    clearTableSelections();
    // tell the reducer to clear the selection on the table.
    handleClose();
  }

  const numberOfRowsSelected = getCountForAddAllFilesModal();
  const numberOfFilesSelected = getFilesCount();

  const OnYesClick = () => { exportFiles(); };
  const onNoClick = () => { handleClose(); };

  return (
    <>
      <button type="button" onClick={handleClickOpen} className={classes.button}>
        Add All Files
      </button>
      <Dialog
        ref={childRef}
        onYesClick={OnYesClick}
        onNoClick={onNoClick}
        numberOfRowsSelected={numberOfRowsSelected}
        cartWillFull={cartWillFull(numberOfFilesSelected)}
      />
    </>
  );
};

export default withStyles(styles, { withTheme: true })(SelectAllModalDialog);
