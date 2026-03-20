import React from 'react';

/**
 * Base entity class ensuring all domain objects have unique identifiers.
 */
abstract class Entity {
  readonly id: string;
  constructor() {
    this.id = crypto.randomUUID();
  }
}

class Service extends Entity {
  constructor(
    public title: string,
    public description: string,
    public icon: React.ReactNode,
    public tags: string[]
  ) {
    super();
  }
}

class Project extends Entity {
  constructor(
    public name: string,
    public clientIndustry: string,
    public summary: string,
    public outcome: string,
    public techStack: string[],
    public imageUrl: string
  ) {
    super();
  }
}

class Testimonial extends Entity {
  constructor(
    public author: string,
    public role: string,
    public company: string,
    public content: string
  ) {
    super();
  }
}

export { Entity, Service, Project, Testimonial }
