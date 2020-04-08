import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';
import {DragDropContext} from 'react-beautiful-dnd';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    moveCard: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {

    const { title, image, description, columns, addColumn, moveCard } = this.props;

    const moveCardHandler = result => {
      
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return (
    
      <section className={styles.component}>
        <Container>
          <Hero
            titleText={title}
            imageImg={image}
          />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <DragDropContext onDragEnd={moveCardHandler}>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
          </DragDropContext>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText}
              action={addColumn}
            />
          </div>
        </Container>
      </section> 
    );
  }
}

export default List;