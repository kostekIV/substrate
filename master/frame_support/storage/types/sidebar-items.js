initSidebarItems({"struct":[["CountedStorageMap","A wrapper around a `StorageMap` and a `StorageValue<Value=u32>` to keep track of how many items are in a map, without needing to iterate all the values."],["Key","A type used exclusively by storage maps as their key type."],["OptionQuery","Implement QueryKindTrait with query being `Option<Value>`"],["StorageDoubleMap","A type that allow to store values for `(key1, key2)` couple. Similar to `StorageMap` but allow to iterate and remove value associated to first key."],["StorageMap","A type that allow to store value for given key. Allowing to insert/remove/iterate on values."],["StorageNMap","A type that allow to store values for an arbitrary number of keys in the form of `(Key<Hasher1, key1>, Key<Hasher2, key2>, ..., Key<HasherN, keyN>)`."],["StorageValue","A type that allow to store a value."],["ValueQuery","Implement QueryKindTrait with query being `Value`"]],"trait":[["CountedStorageMapInstance","The requirement for an instance of [`CountedStorageMap`]."],["EncodeLikeTuple","Marker trait to indicate that each element in the tuple encodes like the corresponding element in another tuple."],["HasKeyPrefix","Trait indicating whether a KeyGenerator has the prefix P."],["HasReversibleKeyPrefix","Trait indicating whether a ReversibleKeyGenerator has the prefix P."],["KeyGenerator","A trait that contains the current key as an associated type."],["KeyGeneratorMaxEncodedLen","The maximum length used by the key in storage."],["QueryKindTrait","Trait implementing how the storage optional value is converted into the queried type."],["ReversibleKeyGenerator","A trait that indicates the hashers for the keys generated are all reversible."],["StorageEntryMetadataBuilder","Build the metadata of a storage."],["TupleToEncodedIter","Trait to indicate that a tuple can be converted into an iterator of a vector of encoded bytes."]]});