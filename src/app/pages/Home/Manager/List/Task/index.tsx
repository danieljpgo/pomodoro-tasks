import React, { useState } from 'react';
import { Task as TaskProps } from '../../types';
import {
  Container,
  Priority,
  Text,
  Info,
} from './styles';
import { useMeasurePosition } from '../../../../../common/utils/hooks/use-measure-position';

interface Props extends TaskProps {
  index: number,
  height: number,
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onStarTimer: (id: string, value: number, limit: number) => void;
  updatePosition: any;
  updateOrder: any;
}

const Task: React.FC<Props> = (props) => {
  const {
    id,
    index,
    text,
    height,
    limit,
    value,
    completed,
    priority,
    onToggle,
    onRemove,
    onStarTimer,
    updateOrder,
    updatePosition,
  } = props;

  const [isDragging, setDragging] = useState(false);

  const ref = useMeasurePosition((pos: any) => updatePosition(index, pos));

  // @TODO melhorar aqui
  function handleStarTimer(idTask: string, valueTask: number, limitTask: number) {
    onStarTimer(idTask, valueTask, limitTask);
  }

  function handleToggle(idTask: string) {
    onToggle(idTask);
  }

  function handleRemove(idTask: string) {
    onRemove(idTask);
  }

  return (
    <li
      style={{ height, zIndex: isDragging ? 3 : 1 }}
    >
      <Container
        layout
        ref={ref}
        initial={false}
        style={{ height }}
        whileHover={{
          scale: 1.03,
          boxShadow: '0px 3px 3px rgba(0,0,0,0.15)',
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: '0px 5px 5px rgba(0,0,0,0.1)',
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          if (isDragging) updateOrder(index, delta.y.translate);
        }}
      >
        <Priority
          type={priority}
          completed={completed}
        />
        <Text>
          <div>{text}</div>
          <div>0 minutes</div>
        </Text>
        <Info>
          <div>1/4</div>
          <div>{value}</div>
        </Info>
        <div>
          <button
            type="button"
            onClick={() => handleStarTimer(id, value, limit)}
          >
            play
          </button>
          <button
            type="button"
            onClick={() => handleToggle(id)}
          >
            toggle
          </button>
          <button
            type="button"
            onClick={() => handleRemove(id)}
          >
            remove
          </button>
        </div>
      </Container>
    </li>
  );
};

Task.defaultProps = {
  id: '',
  text: '',
  completed: false,
  priority: 'medium',
  onToggle: () => {},
  onRemove: () => {},
  onStarTimer: () => {},
};

export default Task;
