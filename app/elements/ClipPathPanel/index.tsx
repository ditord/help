import type { ReactNode } from 'react';

interface ClipPathPanelProps {
  width?: string;
  height?: string;
  children: ReactNode;
}

// TODO: Put class "group" to the parent component for hover animation

export const ClipPathPanel = ({
  width = "w-14", 
  height = "h-14",
  children 
}: ClipPathPanelProps) => {
  return (
    <span className={`${width} ${height} block relative`}>
      <span className="w-full h-full flex justify-center items-center clip-path-panel">
        <span>
          {children}
        </span>
      </span>
    </span>
  );
};

export const ClipPathPanelRounded = ({ width = "w-[108px]", height = "h-[106px]", children }: ClipPathPanelProps) => {
  return (
    <span 
      className={`${width} ${height} relative bg-gradient-to-tr from-blue-300 to-blue-500 clip-path-rounded flex items-center justify-center`}
    >
      {children}
    </span>
  );
};
