import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import SearchProduct from './SearchProduct'

const deviceWidth = Dimensions.get('window').width

const Search = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('polo')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    console.log('useEffect active')
  }, [searchInput])

  // handle search icon click
  async function search() {
    const query = `
    {
      "query": {"match": {
        "name": "${searchInput}"
      }},
      "_source" : ["name", "price"],
      "size": 10
    }
    `
    const response = await fetch('http://mobile-uet.ml:9200/product/_search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: query,
    })

    const data = await response.json()
    setSearchResult(data.hits.hits)
  }
  console.log(searchResult)
  return (
    <>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.inputContainer}
          placeholder="What do you want to buy?"
          value={searchInput}
          onChangeText={setSearchInput}
        />
        <View style={styles.Shop_bag_Container}>
          <FontAwesome
            onClick={() => search()}
            name="search"
            size={24}
            color="#fff"
          />
        </View>
      </View>
      <ScrollView style={[styles.Top_product, { width: deviceWidth }]}>
        <View style={styles.flexDrRow}>
          {searchResult.map((item, index) => (
            <SearchProduct navigation={navigation} item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default Search

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#34B089',
  },
  inputContainer: {
    height: 30,
    marginLeft: 10,
    marginBottom: 8,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    color: '#999999',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '100%',
  },
  Shop_bag_Container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  Top_product: {
    height: 224,
    display: 'flex',
  },
  flexDrRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})
