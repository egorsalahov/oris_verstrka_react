// components/CustomTooltip.jsx
import { createPortal } from 'react-dom';

function CustomTooltip({ 
  position, visible, children, onClose, 
  title, footerVisible, navVisible 
}) {
  if (!visible) return null;

  return createPortal(
    <div 
      id="myCustomTooltip"
      className="custom-tooltip"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y + 10}px`,
        display: 'block',
        zIndex: 9999,
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        minWidth: '280px'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {title && <div id="tooltipTitle" style={{fontWeight: 'bold', marginBottom: '10px'}}>{title}</div>}
      <div id="tooltipContent">{children}</div>
      {navVisible && <div id="monthNav">навигация</div>}
      {footerVisible && <div id="tooltipFooter">кнопки</div>}
    </div>,
    document.body
  );
}

export default CustomTooltip;  // ← ЭТО БЫЛО ОТСУТСТВУЕТ!
