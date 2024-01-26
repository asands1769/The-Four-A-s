package org.launchcode.bookshelfcorner.models;


public enum TagType {


    MUSTREAD("MustRead"),
    TIMELESS("Timeless"),

    RECOMMENDED("Recommended"),

    NOTRECOMMENDED("NotRecommended");

    private final String tagName;

    TagType(String tagName) {
        this.tagName = tagName;
    }

    public String getTagName() {
        return tagName;
    }
}


//    private final String displayName;
//
//    TagType(String displayName) {
//        this.displayName = displayName;
//    }
//
//    public String getDisplayName() {
//        return displayName;
//    }
//
//    private TagType type;
//
//    TagType(String displayName, TagType type) {
//        this.displayName = displayName;
//        this.type = type;
//    }

//    public TagType getType() {
//        return type;
//    }
//
//    public void setType(TagType type) {
//        this.type = type;
//    }
//}