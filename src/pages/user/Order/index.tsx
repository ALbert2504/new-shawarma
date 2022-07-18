import { useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// Components
import OrderDetails from '../../../components/layouts/pages/Order/OrderDetails';

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
            Order summary
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
