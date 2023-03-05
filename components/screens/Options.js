// import * as React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// // import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
// // import { ScrollView } from "react-native-gesture-handler";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';

// const colors = {
//   themeColor: '#4263ec',
//   white: '#fff',
//   background: '#f4f6fc',
//   greyish: '#a4a4a4',
//   tint: '#2b49c3',
// };

// const tasks = [
//   {
//     task: 'Section A',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '2nd Year-Btech',
//   },
//   {
//     task: 'Section B',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '2nd Year-Btech',
//   },
//   {
//     task: 'Section B',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '3rd Year-Btech',
//   },
//   {
//     task: 'Section C',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '3rd Year-Btech',
//   },
//   {
//     task: 'Section C',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '3rd Year-Btech',
//   },
//   {
//     task: 'Section C',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '3rd Year-Btech',
//   },
//   {
//     task: 'Section C',
//     icon: 'account-tie',
//     theme: '#008b8b',
//     stamp: '3rd Year-Btech',
//   },
// ];

// const Task = ({ task, icon, theme, stamp }) => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity
//       onPress={() =>
//         navigation.navigate('Detailsscreen', { name: task })
//       }
//       // onPress={() => navigation.navigate('Detailsscreen')}
//       Key={stamp}
//       style={{
//         backgroundColor: colors.white,
//         flexDirection: 'row',
//         marginHorizontal: 16,
//         marginVertical: 4,
//         borderRadius: 20,
//         paddingVertical: 20,
//         paddingHorizontal: 24,
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <MaterialCommunityIcons
//           name="google-classroom"
//           size={25}
//           style={{ color: '#7209b7', marginRight: 10 }}
//         />
//         <View>
//           <Text style={{ fontSize: 16, color: '#343a40', fontWeight: '600' }}>
//             {task}
//           </Text>
//           <Text style={{ color: '#415a77' }}>{stamp}</Text>
//         </View>
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TouchableOpacity>
//           <MaterialCommunityIcons
//             name="pencil"
//             size={23}
//             style={{ color: '#e9c46a80' }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Scanscreen')}>
//           <AntDesign
//             name="scan1"
//             size={25}
//             style={{ color: '#ef233c99', marginLeft: 8 }}
//           />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default function Options(props) {
//   const [number, onChangeSearch] = React.useState('');
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: colors.themeColor,
//       }}>
//       <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{ backgroundColor: colors.themeColor, flex: 1 }}>
//           <View
//             style={{
//               padding: 16,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             {/* <MaterialCommunityIcons
//             name="text"
//             size={30}
//             style={{color: colors.white}}
//           /> */}
//             <TouchableOpacity>
//               <AntDesign name="user" size={30} style={{ color: colors.white }} />
//             </TouchableOpacity>

//             <TouchableOpacity>
//               <MaterialCommunityIcons
//                 name="bell-outline" //
//                 size={30}
//                 style={{ color: colors.white }}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={{ padding: 16 }}>
//             <Text style={{ color: colors.white, fontSize: 30 }}>
//               {'Hello,\n Aman'}
//             </Text>
//             <View
//               style={{
//                 paddingHorizontal: 16,
//                 // paddingVertical: 8,
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 backgroundColor: '#ffffff30',
//                 borderRadius: 20,
//                 marginVertical: 20,
//                 alignItems: 'center',
//                 height: 50,
//               }}>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons
//                   name="magnify" //
//                   size={30}
//                   style={{ color: colors.white }}
//                 />
//               </TouchableOpacity>
//               <View
//                 style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
//                 <TextInput
//                   style={{
//                     backgroundColor: '#ffffff00',
//                     flex: 1,
//                     color: colors.white,
//                     fontSize: 22,
//                     marginLeft: 5,
//                   }}
//                   onChangeText={onChangeSearch}
//                   value={number}
//                   placeholder="Search"
//                   // keyboardType="numeric"
//                   placeholderTextColor={colors.white}
//                 />
//                 <TouchableOpacity>
//                   <MaterialCommunityIcons
//                     name="microphone" //
//                     size={30}
//                     style={{ color: colors.white }}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                   <MaterialCommunityIcons
//                     name="tune" //
//                     size={30}
//                     style={{ color: colors.white }}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: colors.background,
//             borderTopLeftRadius: 20,
//             overflow: 'hidden',
//             paddingBottom: 20,
//           }}>
//           <View
//             style={{
//               padding: 20,
//               flexDirection: 'row',
//               backgroundColor: colors.background,
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderTopLeftRadius: 20,
//             }}>
//             <Text style={{ fontSize: 24 }}>Classes</Text>
//             <TouchableOpacity>
//               <MaterialCommunityIcons
//                 name="plus" //
//                 size={40}
//                 style={{
//                   color: colors.themeColor,
//                   backgroundColor: colors.white,
//                   borderRadius: 20,
//                   marginHorizontal: 8,
//                 }}
//               />
//             </TouchableOpacity>
//           </View>

//           {tasks.map(task => (
//             <Task
//               task={task.task}
//               icon={task.icon}
//               theme={task.theme}
//               stamp={task.stamp}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Header = () => {
  return (
    <View>
      <Text style={{}}>
        text
      </Text>
    </View>
  )
}

const Options = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const [oldData, setOldData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setOldData(response);
      });
  }, []);
  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text !== '') {
      let tempData = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(oldData);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          marginTop: 20,

          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.2,

            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
          }}>
          {/* <MaterialCommunityIcons
            name="search"
            size={25}
            style={{ color: '#7209b7', marginRight: 10 }}
          /> */}
          <AntDesign
            name="search1"
            size={25}
            style={{ color: '#ef233c99', marginLeft: 8 }}
          />
          {/* <Image
            source={require('./search.png')}
            style={{width: 24, height: 24, marginLeft: 15, opacity: 0.5}}
          /> */}
          <TextInput
            ref={searchRef}
            placeholder="search item here..."
            style={{ width: '76%', height: 50 }}
            value={search}
            onChangeText={txt => {
              searchFilterFunction(txt);
              setSearch(txt);
            }}
          />
          {search == '' ? null : (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                searchRef.current.clear();
                searchFilterFunction('');
                setSearch('');
              }}>
              <AntDesign
                name="closecircleo"
                size={25}
                style={{ color: '#ef233c99', marginLeft: 8 }}
              />
              {/* <Image
                source={require('./close.png')}
                style={{width: 16, height: 16, opacity: 0.5}}
              /> */}
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={{
            marginRight: 15,
          }}
          onPress={() => {
            setVisible(true);
          }}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={25}
            style={{ color: '#7209b7', marginRight: 10 }}
          />
          {/* <Image
            source={require('./filter.png')}
            style={{width: 24, height: 24}}
          /> */}
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        // stickyHeaderHiddenOnScroll
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: '90%',

                borderRadius: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: index == data.length - 1 ? 20 : 0,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 60,
                  height: '90%',
                  marginLeft: 10,
                  borderRadius: 10,
                }}
              />
              <View style={{ width: '80%' }}>
                <Text
                  style={{ fontWeight: '600', marginLeft: 10, marginTop: 10 }}>
                  {item.title.substring(0, 30)}
                </Text>
                <Text style={{ fontSize: 12, margin: 10 }}>
                  {item.description.substring(0, 50)}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      fontWeight: '800',
                      color: 'green',
                    }}>
                    {'$ ' + item.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 50,
                      fontWeight: '800',
                      color: 'orange',
                    }}>
                    {item.rating.rate}
                  </Text>
                  <AntDesign
                    name="star"
                    size={25}
                    style={{ color: '#ef233c99', marginLeft: 8 }}
                  />
                  {/* <Image
                    source={require('./star.png')}
                    style={{width: 12, height: 12, marginLeft: 5}}
                  /> */}
                </View>
              </View>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <View
            style={{
              width: '80%',
              height: 200,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setSelectedFilter(1);
                const strAscending = data.sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                );
                setData(strAscending);
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000' }}> Sort By Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setSelectedFilter(2);
                setData(data.sort((a, b) => a.price - b.price));
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000' }}>
                Low to High Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setSelectedFilter(3);
                setData(data.sort((a, b) => b.price - a.price));
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000' }}>
                Hight to Low Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setSelectedFilter(4);
                setData(data.sort((a, b) => a.rating.rate - b.rating.rate));
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000' }}> Sort By Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Options;