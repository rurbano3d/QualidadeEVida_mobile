import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import api from '~/services/api';
import { agreementRequest } from '~/store/modules/auth/actions';

const { height } = Dimensions.get('window');

const styles = {
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcP: {
    marginTop: 10,
    fontSize: 12,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },

  button: {
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center',
  },
};

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const Agreement = () => {
  const student_id = useSelector(state => state.auth.student.id);
  const dispatch = useDispatch();
  const [enabled, setEnabled] = React.useState(false);
  const [contract, setContract] = React.useState('');

  async function getContract() {
    const response = await api.get('contract');
    setContract(response.data.contracts[0].document);
  }
  React.useEffect(() => {
    getContract();
  }, []);

  const handleAccepted = () => {
    dispatch(agreementRequest(student_id, true));
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.tcContainer}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setEnabled(true);
          }
        }}
      >
        <Text style={styles.tcP}>{contract}</Text>
      </ScrollView>

      <TouchableOpacity
        disabled={!enabled}
        onPress={handleAccepted}
        style={enabled ? styles.button : styles.buttonDisabled}
      >
        <Text style={styles.buttonLabel}>Aceito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Agreement;
