import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// Components
import OrderDetails from '../../../components/layouts/pages/Order/OrderDetails';
import OrderSummary from '../../../components/layouts/pages/Order/OrderSummary';

// Types
import { RootState } from '../../../store/configureStore';


const Order = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const fullName = useMemo(() => `${user?.firstName} ${user?.lastName}`, [user]);

  return (
    <div>
      <h3 className="text-primary fw-bold mb-3">
        Ողջույն {fullName}։ Ի՞նչ տեսակի շաուրմա կցանկանայիք ուտել այսօր։ 🌯
      </h3>
      <Row>
        <Col xs={12} lg={8}>
          <OrderDetails />
        </Col>
        <Col xs={12} lg={4}>
          <div className="border border-2 border-primary rounded p-3">
            <OrderSummary />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
