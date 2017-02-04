#!/bin/bash

echo "Create a new Swifty Week post"
echo ""

while true; do
    read -p "Enter date (YYYY-MM-DD): " YEAR

    if [[ ! ($YEAR =~ ^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$) ]]; then
        echo ""
        echo "invalid: date must have format YYYY-MM-DD. Found '$YEAR'."
        echo ""
    else
        break
    fi
done

while true; do
    read -p "Enter current time (HH:MM):" TIME
    break
done

while true; do
    read -p "Enter number: " NUMBER
    break
done


POST_DIR="_drafts"

echo "Generate a post or a draft?"
select pd in "post" "draft"; do
    case $pd in
        post )
            echo "Generating new post in _posts/ ...";
            POST_DIR="_posts";
    break;;
        draft )
            echo "Generating new post in _drafts/ ...";
    break;;
    esac
done

mkdir -p "$POST_DIR"

POST="$POST_DIR/$YEAR-swifty-week-$NUMBER.md"
touch $POST

echo "---
layout: post
title: "Swifty Week $NUMBER"
date: $YEAR $TIME:00 +0900
tags: swiftyweek
comments: false
---

This is the **#$NUMBER** article. 

<br>

---

### Article

<br>

---

### Slide

<br>

---

### Github

<br>

---

### Random

<br>

---

### Podcast

<br>

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn) and [Github](https://github.com/pixyzehn).

Have a lovely week <3

" > $POST

echo "Successfully created '$POST'"
echo "Opening..."
echo ""
open $POST
