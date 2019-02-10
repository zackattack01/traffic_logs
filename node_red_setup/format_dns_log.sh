#!/bin/bash

queryInfo=$1
target=$(echo $queryInfo | sed -r 's/^.+from:([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}).*$/\1/')
match=$(grep $target /tmp/lan_lookups)
if [ -z "$match" ]; then
        hn=$(dig +short -x $target|tr "." " ")
        echo "$target $hn" >> /tmp/lan_lookups
else
        hn=$(echo $match|awk '{print $2}')
fi

echo $queryInfo | sed -r "s/^(.+from:)([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})(.*)$/\1$hn\3/"
exit 0;

